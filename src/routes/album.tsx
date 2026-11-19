import {createFileRoute,Link,useNavigate} from '@tanstack/react-router';
import {useQuery,useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {ArrowLeft,Plus,LogOut,Heart,Copy,RefreshCw,Pencil,Trash2,X,Images} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {AlbumAuth} from '@/components/AlbumAuth';
import {useAlbumSession} from '@/components/AlbumSession';
import {MemoryEditor} from '@/components/MemoryEditor';
import {WorldMap} from '@/components/WorldMap';
import {geoNames} from '@/data/geo-names';
import {Dialog,DialogContent,DialogHeader,DialogTitle} from '@/components/ui/dialog';
import {loadAlbum,removeMemory,type Memory} from '@/lib/album';
import {supabase} from '@/integrations/supabase/client';
import {toast} from 'sonner';

export const Route=createFileRoute('/album')({
  validateSearch:(s:Record<string,unknown>)=>({country:typeof s.country==='string'?s.country:undefined}),
  head:()=>({meta:[{title:'Wasz album wspomnień | Randka dookoła świata'},{name:'description',content:'Prywatny album wspólnych randek: zdjęcia, daty i wspomnienia.'},{property:'og:title',content:'Wasz album | Randka dookoła świata'},{property:'og:description',content:'Zachowajcie wspomnienia ze wspólnych randek.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),
  component:Album,
});
function Album() {
  const {user,ready}=useAlbumSession();
  const {country}=Route.useSearch();
  const [editing,setEditing]=useState<Memory|true|null>(country?true:null);
  const [code,setCode]=useState('');
  const [busy,setBusy]=useState(false);
  const [fullPhoto,setFullPhoto]=useState<string|null>(null);
  const [gallery,setGallery]=useState<Memory[]|null>(null);
  const qc=useQueryClient();const navigate=useNavigate();
  const album=useQuery({queryKey:['album',user?.id],queryFn:loadAlbum,enabled:ready && !!user,refetchInterval:60000});
  async function pairing(join:boolean) {setBusy(true);try{const {error}=join?await supabase.rpc('join_couple',{_code:code}):await supabase.rpc('create_couple');if(error) throw error;await album.refetch();}catch{toast.error('Nie udało się połączyć albumu. Sprawdź kod; album może już mieć dwie osoby.');}finally{setBusy(false);}}
  async function signOut(){await qc.cancelQueries();qc.clear();await supabase.auth.signOut();await navigate({to:'/album',search:{country:undefined},replace:true});}
  const couple=album.data?.couple;
  return <main className="min-h-screen bg-hero"><div className="max-w-4xl mx-auto px-5 py-8 md:py-12">
    <nav className="flex justify-between items-center gap-3 mb-10"><Button asChild variant="ghost"><Link to="/"><ArrowLeft/>Losowanie</Link></Button>{user && <Button variant="ghost" size="icon" title="Wyloguj się" aria-label="Wyloguj się" onClick={signOut}><LogOut/></Button>}</nav>
    <header className="flex flex-wrap justify-between items-center gap-4"><div><p className="text-primary text-sm mb-2">Randka dookoła świata</p><h1 className="text-4xl leading-tight tracking-normal">Wasz album</h1></div>{couple && !editing && <Button onClick={()=>setEditing(true)}><Plus/>Dodaj wspomnienie</Button>}</header>
    {!ready ? <p role="status" className="py-10">…</p> : !user ? <AlbumAuth/> : album.isPending ? <p className="py-10" role="status">…</p> : album.isError ? <div className="py-10"><p>Nie udało się otworzyć albumu.</p><Button onClick={()=>album.refetch()}>Spróbuj ponownie</Button></div> : !couple ? <section className="max-w-md mx-auto py-12 space-y-6">
      <h2 className="text-2xl">Wasze wspomnienia, razem</h2><Button className="w-full" disabled={busy} onClick={()=>pairing(false)}><Heart/>Utwórz wspólny album</Button>
      <form className="space-y-3 border-t pt-6" onSubmit={e=>{e.preventDefault();void pairing(true);}}><label className="block space-y-2"><span>Kod od partnera lub partnerki</span><Input required value={code} onChange={e=>setCode(e.target.value)} autoComplete="off"/></label><Button variant="outline" disabled={busy} className="w-full">Dołącz do albumu</Button></form>
    </section> : <>
      {editing ? (
        <MemoryEditor
          key={editing === true ? 'new' : editing.id}
          coupleId={couple.id}
          country={country}
          memory={editing === true ? undefined : editing}
          onCancel={() => setEditing(null)}
          onDone={() => {
            setEditing(null);
            void album.refetch();
          }}
        />
      ) : (
        <>
          <div className="flex flex-wrap items-center justify-between gap-3 border-y py-4 mt-8 text-sm text-muted-foreground">
            <span>
              Prywatny album · {album.data?.members === 2 ? 'Jesteście we dwoje' : 'Czeka na drugą osobę'}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(couple.invite_code);
                    toast('Kod zaproszenia skopiowany. Przekaż go tylko partnerowi lub partnerce.');
                  } catch {
                    window.prompt('Kod zaproszenia', couple.invite_code);
                  }
                }}
              >
                <Copy />Kod zaproszenia
              </Button>
              <Button
                variant="ghost"
                size="icon"
                title="Odśwież album"
                aria-label="Odśwież album"
                onClick={() => album.refetch()}
              >
                <RefreshCw />
              </Button>
            </div>
          </div>

          {!!album.data?.memories.length && (
            <section className="mt-8 rounded-lg border bg-card p-4">
              <h2 className="text-xl mb-1">Wasza mapa</h2>
              <p className="text-xs text-muted-foreground mb-3">
                Kliknij zaznaczony kraj, aby otworzyć album.
              </p>
              <WorldMap
                visited={new Set(album.data.memories.map(m => geoNames[m.country]).filter(Boolean))}
                onSelect={geo => {
                  const list = album.data!.memories.filter(m => geoNames[m.country] === geo);
                  if (list.length) setGallery(list);
                }}
              />
            </section>
          )}

          {!album.data?.memories.length && (
            <div className="text-center py-20">
              <Heart aria-hidden className="size-10 text-primary mx-auto mb-5" />
              <h2 className="text-2xl">Pierwsza randka do zapamiętania</h2>
              <Button variant="link" onClick={() => setEditing(true)}>
                Dodaj pierwsze wspomnienie
              </Button>
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {album.data?.memories.map(m => (
              <article key={m.id} className="bg-card border rounded-lg overflow-hidden">
                <button
                  type="button"
                  className="relative block w-full text-left"
                  aria-label={`Otwórz album — ${m.country}`}
                  onClick={() => setGallery([m])}
                >
                  {m.photos[0] ? (
                    <img src={m.photos[0].url} alt={`${m.country} — okładka`} className="aspect-[4/3] w-full object-cover" />
                  ) : (
                    <div className="aspect-[4/3] w-full bg-muted flex items-center justify-center">
                      <Images className="size-10 text-muted-foreground" />
                    </div>
                  )}
                  {m.photos.length > 1 && (
                    <span className="absolute bottom-3 right-3 rounded-full bg-background/85 px-3 py-1 text-xs flex items-center gap-1">
                      <Images className="size-3.5" />{m.photos.length}
                    </span>
                  )}
                </button>
                <div className="p-5">
                  <div className="flex justify-between gap-3">
                    <h2 className="text-2xl tracking-normal">{m.country}</h2>
                    <div className="flex">
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Edytuj wspomnienie — ${m.country}`}
                        onClick={() => {
                          setEditing(m);
                          window.scrollTo({ top: 0 });
                        }}
                      >
                        <Pencil />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Usuń wspomnienie — ${m.country}`}
                        onClick={async () => {
                          if (!window.confirm('Usunąć wspomnienie i wszystkie jego zdjęcia z wspólnego albumu?')) return;
                          try {
                            await removeMemory(m);
                            await album.refetch();
                          } catch {
                            toast.error('Nie udało się usunąć wspomnienia.');
                          }
                        }}
                      >
                        <Trash2 />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {new Date(`${m.date_on}T12:00:00`).toLocaleDateString('pl-PL')}
                    {m.rating !== null && (
                      <span className="text-primary ml-3" aria-label={`Ocena ${m.rating} z 5`}>
                        {'★'.repeat(m.rating)}{'☆'.repeat(5 - m.rating)}
                      </span>
                    )}
                  </p>
                  {m.note && (
                    <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-relaxed line-clamp-4">
                      {m.note}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </>}
    <Dialog open={!!gallery} onOpenChange={o=>{if(!o){setGallery(null);setFullPhoto(null);}}}><DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">{gallery && fullPhoto ? <div className="space-y-3"><Button variant="ghost" onClick={()=>setFullPhoto(null)}><ArrowLeft/>Wróć do albumu</Button><img src={fullPhoto} alt="Zdjęcie z randki" className="max-h-[75vh] w-full object-contain"/></div> : gallery && <><DialogHeader><DialogTitle className="text-2xl">{gallery[0].country}</DialogTitle></DialogHeader>
      {gallery.map(m=><div key={m.id} className="space-y-3"><p className="text-sm text-muted-foreground">{new Date(`${m.date_on}T12:00:00`).toLocaleDateString('pl-PL')}{m.rating!==null && <span className="text-primary ml-3">{'★'.repeat(m.rating)}{'☆'.repeat(5-m.rating)}</span>}</p>{m.note && <p className="whitespace-pre-wrap text-sm">{m.note}</p>}
        {m.photos.length>0 && <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">{m.photos.map((p,i)=><button type="button" key={p.id} onClick={()=>setFullPhoto(p.url)} aria-label={`Powiększ zdjęcie ${i+1}`}><img src={p.url} alt={`${m.country} — zdjęcie ${i+1}`} loading="lazy" className="aspect-square w-full object-cover rounded-md"/></button>)}</div>}</div>)}</>}</DialogContent></Dialog>
    {fullPhoto && !gallery && <div role="dialog" aria-modal="true" aria-label="Zdjęcie z randki" className="fixed inset-0 z-[60] bg-background/95 flex items-center justify-center p-6" onClick={()=>setFullPhoto(null)}><Button autoFocus variant="secondary" size="icon" className="absolute right-5 top-5" aria-label="Zamknij zdjęcie" onClick={()=>setFullPhoto(null)} onKeyDown={e=>{if(e.key==='Escape')setFullPhoto(null);}}><X/></Button><img src={fullPhoto} alt="Zdjęcie z randki" className="max-h-[85vh] max-w-full object-contain"/></div>}
  </div></main>;
}