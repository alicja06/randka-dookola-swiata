import {useEffect, useMemo, useRef, useState} from 'react';
import {geoNaturalEarth1, geoPath} from 'd3-geo';
import {TransformWrapper, TransformComponent, useControls} from 'react-zoom-pan-pinch';
import {ArrowRight, MapPin, Minus, Plus, RotateCcw, X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {Command, CommandEmpty, CommandInput, CommandItem, CommandList} from '@/components/ui/command';
import {AlbumGlobe} from '@/components/AlbumGlobe';
import {loadWorldGeography, type CountryFeature} from '@/lib/world-geography';
import {geoNames} from '@/data/geo-names';

const WIDTH = 960, HEIGHT = 500;
type Destination = {country: string; count: number};

export function WorldMap({destinations, onSelect}: {destinations: Destination[]; onSelect: (geo: string) => void}) {
  const [features, setFeatures] = useState<CountryFeature[] | null>(null);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [picker, setPicker] = useState(false);
  const visited = useMemo(() => new Set(destinations.map(item => geoNames[item.country]).filter(Boolean)), [destinations]);
  const sorted = useMemo(() => [...destinations].sort((a, b) => a.country.localeCompare(b.country, 'pl')), [destinations]);
  useEffect(() => {
    let active = true;
    loadWorldGeography().then(data => {if (active) setFeatures(data);}).catch(() => {if (active) setError(true);});
    return () => {active = false;};
  }, []);
  const chosen = sorted.filter(item => geoNames[item.country] === selected);
  return <>
    <div className="flex items-center justify-between gap-4"><h2 className="text-2xl tracking-normal">Wasz świat</h2><span className="text-sm text-muted-foreground flex items-center gap-2"><MapPin className="size-4"/>{destinations.length}</span></div>
    {features ? <AlbumGlobe features={features} visited={visited} onOpen={() => setOpen(true)}/> : error ? <p role="alert" className="py-10">Nie udało się otworzyć mapy. Odśwież album, aby spróbować ponownie.</p> : <div className="h-[340px] sm:h-[400px]" role="status" aria-label="Wczytywanie globusa"/>}
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent aria-describedby={undefined} className="fixed inset-0 flex h-[100dvh] max-h-none w-screen max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none border-0 p-0 sm:rounded-none [&>button]:hidden">
        <header className="flex shrink-0 items-center justify-between gap-3 border-b bg-background px-4 pb-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
          <DialogTitle className="text-xl tracking-normal">Wasza mapa</DialogTitle>
          <div className="flex items-center gap-2">
            <Popover open={picker} onOpenChange={setPicker}><PopoverTrigger asChild><Button variant="outline" size="sm"><MapPin/>Kraje</Button></PopoverTrigger>
              <PopoverContent className="country-picker-surface w-72 max-w-[calc(100vw-2rem)] p-0" align="end"><Command className="country-picker-surface"><CommandInput placeholder="Szukaj w Waszym albumie…"/><CommandList><CommandEmpty>Nie znaleziono kraju.</CommandEmpty>{sorted.map(item => <CommandItem key={item.country} value={item.country} onSelect={() => {setSelected(geoNames[item.country]); setPicker(false);}}>{item.country}<span className="ml-auto text-muted-foreground">{item.count}</span></CommandItem>)}</CommandList></Command></PopoverContent>
            </Popover>
            <Button variant="ghost" size="icon" title="Zamknij mapę" aria-label="Zamknij mapę" onClick={() => setOpen(false)}><X/></Button>
          </div>
        </header>
        {features && <FlatMap features={features} visited={visited} selected={selected} onSelect={setSelected}/>}
        {chosen.length > 0 && <footer className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t bg-background px-4 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))]" aria-live="polite">
          <div className="min-w-0"><h3 className="text-lg tracking-normal break-words">{chosen.map(item => item.country).join(' · ')}</h3><p className="text-sm text-muted-foreground">Wspomnienia: {chosen.reduce((sum, item) => sum + item.count, 0)}</p></div>
          <Button onClick={() => {if (selected) {setOpen(false); onSelect(selected);}}}>Otwórz wspomnienia<ArrowRight/></Button>
        </footer>}
      </DialogContent>
    </Dialog>
  </>;
}

function FlatMap({features, visited, selected, onSelect}: {features: CountryFeature[]; visited: Set<string>; selected: string | null; onSelect: (geo: string) => void}) {
  const host = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({width: 0, height: 0});
  const path = useMemo(() => geoPath(geoNaturalEarth1().fitExtent([[10, 10], [WIDTH - 10, HEIGHT - 10]], {type: 'FeatureCollection', features})), [features]);
  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const resize = new ResizeObserver(() => setSize({width: element.clientWidth, height: element.clientHeight}));
    resize.observe(element); return () => resize.disconnect();
  }, []);
  const fit = Math.min(size.width / WIDTH, size.height / HEIGHT);
  return <div ref={host} className="album-map relative min-h-0 flex-1 overflow-hidden touch-none">
    {fit > 0 && <TransformWrapper key={`${size.width}:${size.height}`} initialScale={fit} minScale={fit} maxScale={12} centerOnInit limitToBounds wheel={{step: 0.06}} doubleClick={{step: 0.8}} panning={{velocityDisabled: true}}>
      {({zoomIn, zoomOut, resetTransform}) => <>
        <MapFocus selected={selected} features={features} path={path} size={size} fit={fit}/>
        <TransformComponent wrapperClass="!h-full !w-full" contentClass="touch-none">
          <svg width={WIDTH} height={HEIGHT} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-label="Mapa krajów z Waszymi wspomnieniami">
            {features.map(country => {
              const name = country.properties.name; const active = visited.has(name);
              const label = Object.entries(geoNames).filter(([, geo]) => geo === name).map(([polish]) => polish).join(', ');
              return <path key={country.id ?? name} d={path(country) ?? ''} className={active ? 'map-visited cursor-pointer hover:opacity-80' : 'map-land'} strokeWidth={selected === name ? 2 : 0.6} vectorEffect="non-scaling-stroke"
                role={active ? 'button' : undefined} tabIndex={active ? 0 : undefined} aria-label={active ? `Wybierz kraj: ${label}` : undefined}
                onClick={active ? () => onSelect(name) : undefined} onKeyDown={active ? event => {if (event.key === 'Enter' || event.key === ' ') {event.preventDefault(); onSelect(name);}} : undefined}><title>{label || name}</title></path>;
            })}
            {features.filter(country => visited.has(country.properties.name) && path.area(country) < 40).map(country => {
              const [x, y] = path.centroid(country);
              if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
              return <circle key={country.properties.name} cx={x} cy={y} r={3} className="map-visited cursor-pointer" strokeWidth={1} vectorEffect="non-scaling-stroke" onClick={() => onSelect(country.properties.name)}/>;
            })}
          </svg>
        </TransformComponent>
        <div className="absolute right-4 bottom-4 flex flex-col gap-2">
          <Button variant="secondary" size="icon" title="Powiększ mapę" aria-label="Powiększ mapę" onClick={() => zoomIn(0.4)}><Plus/></Button>
          <Button variant="secondary" size="icon" title="Pomniejsz mapę" aria-label="Pomniejsz mapę" onClick={() => zoomOut(0.4)}><Minus/></Button>
          <Button variant="secondary" size="icon" title="Cały świat" aria-label="Cały świat" onClick={() => resetTransform()}><RotateCcw/></Button>
        </div>
      </>}
    </TransformWrapper>}
  </div>;
}

function MapFocus({selected, features, path, size, fit}: {selected: string | null; features: CountryFeature[]; path: ReturnType<typeof geoPath>; size: {width: number; height: number}; fit: number}) {
  const {setTransform} = useControls();
  useEffect(() => {
    const country = features.find(item => item.properties.name === selected);
    if (!country) return;
    const [[left, top], [right, bottom]] = path.bounds(country);
    const [x, y] = path.centroid(country);
    if (!Number.isFinite(x) || !Number.isFinite(y)) return;
    const scale = Math.max(fit, Math.min(6, size.width * 0.6 / Math.max(1, right - left), size.height * 0.6 / Math.max(1, bottom - top)));
    setTransform(size.width / 2 - x * scale, size.height / 2 - y * scale, scale, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300);
  }, [selected, features, path, size.width, size.height, fit, setTransform]);
  return null;
}