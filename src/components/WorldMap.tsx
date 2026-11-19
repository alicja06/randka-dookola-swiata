import {useEffect,useMemo,useState} from 'react';
import {geoNaturalEarth1,geoPath,} from 'd3-geo';
import {feature} from 'topojson-client';
import type {Feature,Geometry} from 'geojson';
type F=Feature<Geometry,{name:string}>;
const W=960,H=500;
export function WorldMap({visited,onSelect}:{visited:Set<string>;onSelect:(geo:string)=>void}) {
  const [features,setFeatures]=useState<F[]|null>(null);
  useEffect(()=>{let on=true;import('world-atlas/countries-50m.json').then(m=>{const t=(m.default ?? m) as any;const fc=feature(t,t.objects.countries) as any;if(on) setFeatures(fc.features.filter((f:F)=>f.properties.name!=='Antarctica'));});return ()=>{on=false;};},[]);
  const path=useMemo(()=>geoPath(geoNaturalEarth1().scale(175).translate([W/2,H/2+20])),[]);
  if(!features) return <div className="aspect-[96/50] w-full rounded-lg bg-muted/40 animate-pulse"/>;
  const hits=features.filter(f=>visited.has(f.properties.name));
  return <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Mapa odwiedzonych krajów">
    {features.map((f,i)=>{const v=visited.has(f.properties.name);return <path key={i} d={path(f) ?? ''}
      className={v?'fill-primary stroke-background cursor-pointer hover:opacity-80 transition-opacity':'fill-muted stroke-background'} strokeWidth={0.4}
      onClick={v?()=>onSelect(f.properties.name):undefined}></path>;})}
    {hits.map(f=>{const c=path.centroid(f as any);const area=path.area(f as any);if(area>40 || !isFinite(c[0])) return null;return <circle key={f.properties.name} cx={c[0]} cy={c[1]} r={4} className="fill-primary stroke-background cursor-pointer" strokeWidth={1.5} onClick={()=>onSelect(f.properties.name)}/>;})}
  </svg>;
}
