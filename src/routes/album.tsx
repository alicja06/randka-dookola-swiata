import {createFileRoute,Link,useNavigate} from '@tanstack/react-router';
import {useQuery,useQueryClient} from '@tanstack/react-query';
import {useState} from 'react';
import {ArrowLeft,Plus,LogOut,Heart,Copy,RefreshCw,Pencil,Trash2,X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {AlbumAuth} from '@/components/AlbumAuth';
import {useAlbumSession} from '@/components/AlbumSession';
import {MemoryEditor} from '@/components/MemoryEditor';
import {loadAlbum,removeMemory,removePhoto,type Memory} from '@/lib/album';
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
  const qc=useQueryClient();const navigate=useNavigate();
  const album=useQuery({queryKey:['album',user?.id],queryFn:loadAlbum,enabled:ready && !!user,refetchInterval:60000});
  async function pairing(join:boolean) {setBusy(true);try{const {error}=join?await supabase.rpc('join_couple',{_code:code}):await supabase.rpc('create_couple');if(error) throw error;await album.refetch();}catch{toast.error('Nie udało się połączyć albumu. Sprawdź kod; album może już mieć dwie osoby.');}finally{setBusy(false);}}
  async function signOut(){await qc.cancelQueries();qc.clear();await supabase.auth.signOut();await navigate({to:'/album',search:{country:undefined},replace:true});}
  const couple=album.data?.couple;
  return <main className="min-h-screen bg-hero"><div className="max-w-4xl mx-auto px-5 py-8 md:py-12">
    <nav className="flex justify-between items-center gap-3 mb-10"><Button asChild variant="ghost"><Link to="/"><ArrowLeft/>Losowanie</Link></Button>{user && <Button variant="ghost" size="icon" title="Wyloguj się" aria-label="Wyloguj się" onClick={signOut}><LogOut/></Button>}</nav>
    <header className="flex flex-wrap justify-between items-center gap-4"><div><p className="text-primary text-sm mb-2">Randka dookoła świata</p><h1 className="text-4xl leading-tight tracking-normal">Wasz album</h1></div>{couple && <Button onClick={()=>setEditing(true)}><Plus/>Dodaj wspomnienie</Button>}</header>
    {!ready ? <p role="status" className="py-10">…</p> : !user ? <AlbumAuth/> : album.isPending ? <p className="py-10" role="status">…</p> : album.isError ? <div className="py-10"><p>Nie udało się otworzyć albumu.</p><Button onClick={()=>album.refetch()}>Spróbuj ponownie</Button></div> : !couple ? <section className="max-w-md mx-auto py-12 space-y-6">
      <h2 className="text-2xl">Wasze wspomnienia, razem</h2><Button className="w-full" disabled={busy} onClick={()=>pairing(false)}><Heart/>Utwórz wspólny album</Button>
      <form className="space-y-3 border-t pt-6" onSubmit={e=>{e.preventDefault();void pairing(true);}}><label className="block space-y-2"><span>Kod od partnera lub partnerki</span><Input required value={code} onChange={e=>setCode(e.target.value)} autoComplete="off"/></label><Button variant="outline" disabled={busy} className="w-full">Dołącz do albumu</Button></form>
    </section> : <>
      <div className="flex flex-wrap items-center justify-between gap-3 border-y py-4 mt-8 text-sm text-muted-foreground"><span>Prywatny album · {album.data?.members===2?'Jesteście we dwoje':'Czeka na drugą osobę'}</span><div className="flex gap-2"><Button variant="outline" onClick={async()=>{try{await navigator.clipboard.writeText(couple.invite_code);toast('Kod zaproszenia skopiowany. Przekaż go tylko partnerowi lub partnerce.');}catch{window.prompt('Kod zaproszenia',couple.invite_code);}}}><Copy/>Kod zaproszenia</Button><Button variant="ghost" size="icon" title="Odśwież album" aria-label="Odśwież album" onClick={()=>album.refetch()}><RefreshCw/></Button></div></div>
      {editing && <MemoryEditor key={editing===true?'new':editing.id} coupleId={couple.id} country={country} memory={editing===true?undefined:editing} onCancel={()=>setEditing(null)} onDone={()=>{setEditing(null);void album.refetch();}}/>}
      {!album.data?.memories.length && !editing && <div className="text-center py-20"><Heart aria-hidden className="size-10 text-primary mx-auto mb-5"/><h2 className="text-2xl">Pierwsza randka do zapamiętania</h2><Button variant="link" onClick={()=>setEditing(true)}>Dodaj pierwsze wspomnienie</Button></div>}
      <div className="grid md:grid-cols-2 gap-6 mt-8">{album.data?.memories.map(m=><article key={m.id} className="bg-card border rounded-lg overflow-hidden">
        {m.photos.length>0 && <div className="grid grid-cols-2 gap-1">{m.photos.map((p,i)=><div key={p.id} className="relative"><Button variant="ghost" className="p-0 w-full h-auto rounded-none" aria-label={`Otwórz zdjęcie ${i+1} — ${m.country}`} onClick={()=>setFullPhoto(p.url)}><img src={p.url} alt={`${m.country} — zdjęcie z randki ${i+1}`} className="aspect-square w-full object-cover"/></Button><Button variant="secondary" size="icon" className="absolute top-2 right-2" aria-label={`Usuń zdjęcie ${i+1} — ${m.country}`} onClick={async()=>{if(!window.confirm('Usunąć to zdjęcie z wspólnego albumu?'))return;try{await removePhoto(p);await album.refetch();}catch{toast.error('Nie udało się usunąć zdjęcia.');}}}><X/></Button></div>)}</div>}
        <div className="p-5"><div className="flex justify-between gap-3"><h2 className="text-2xl tracking-normal">{m.country}</h2><div className="flex"><Button variant="ghost" size="icon" aria-label={`Edytuj wspomnienie — ${m.country}`} onClick={()=>setEditing(m)}><Pencil/></Button><Button variant="ghost" size="icon" aria-label={`Usuń wspomnienie — ${m.country}`} onClick={async()=>{if(!window.confirm('Usunąć wspomnienie i wszystkie jego zdjęcia z wspólnego albumu?'))return;try{await removeMemory(m);await album.refetch();}catch{toast.error('Nie udało się usunąć wspomnienia.');}}}><Trash2/></Button></div></div>
        <p className="text-sm text-muted-foreground mt-2">{new Date(`${m.date_on}T12:00:00`).toLocaleDateString('pl-PL')}{m.rating!==null && <span className="text-primary ml-3" aria-label={`Ocena ${m.rating} z 5`}>{'★'.repeat(m.rating)}{'☆'.repeat(5-m.rating)}</span>}</p>{m.note && <p className="mt-4 whitespace-pre-wrap break-words text-sm leading-relaxed">{m.note}</p>}</div>
      </article>)}</div>
    </>}
    {fullPhoto && <div role="dialog" aria-modal="true" aria-label="Zdjęcie z randki" className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-6" onClick={()=>setFullPhoto(null)}><Button autoFocus variant="secondary" size="icon" className="absolute right-5 top-5" aria-label="Zamknij zdjęcie" onClick={()=>setFullPhoto(null)} onKeyDown={e=>{if(e.key==='Escape')setFullPhoto(null);}}><X/></Button><img src={fullPhoto} alt="Zdjęcie z randki" className="max-h-[85vh] max-w-full object-contain"/></div>}
  </div></main>;
}