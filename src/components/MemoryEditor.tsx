import {useEffect,useRef,useState,type FormEvent} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Star,X,ImagePlus,Loader2} from 'lucide-react';
import {saveMemory,type Memory,type PhotoItem} from '@/lib/album';
import {CountryPicker} from './CountryPicker';
import {PhotoSorter} from './PhotoSorter';

function today() {
  const n=new Date();
  return `${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,'0')}-${String(n.getDate()).padStart(2,'0')}`;
}

export function MemoryEditor({coupleId,country,memory,onDone,onCancel}:{coupleId:string;country?:string;memory?:Memory;onDone:()=>void;onCancel:()=>void}) {
  const [place,setPlace]=useState(memory?.country ?? country ?? '');
  const [date,setDate]=useState(memory?.date_on ?? today());
  const [note,setNote]=useState(memory?.note ?? '');
  const [rating,setRating]=useState<number|null>(memory?.rating ?? null);
  const [items,setItems]=useState<PhotoItem[]>(()=>memory?.photos.map(p=>({key:p.id,kind:'existing' as const,photo:p})) ?? []);
  const [busy,setBusy]=useState(false);
  const [error,setError]=useState('');
  const inputRef=useRef<HTMLInputElement>(null);
  const itemsRef=useRef(items);itemsRef.current=items;
  useEffect(()=>()=>itemsRef.current.forEach(i=>{if(i.kind==='new') URL.revokeObjectURL(i.url);}),[]);
  function addFiles(list:FileList|null) {
    const files=Array.from(list ?? []).filter(f=>f.type.startsWith('image/'));
    setItems(prev=>[...prev,...files.map(file=>({key:crypto.randomUUID(),kind:'new' as const,file,url:URL.createObjectURL(file)}))]);
    setError('');
  }
  async function submit(e:FormEvent) {
    e.preventDefault();
    if(!place){setError('Wybierz kraj.');return;}
    setBusy(true);setError('');
    try {await saveMemory(coupleId,{country:place,date_on:date,note,rating},items,memory);onDone();}
    catch(e){setError(e instanceof Error ? e.message:'Nie udało się zapisać wspomnienia.');}
    finally{setBusy(false);}
  }
  return <section className="py-8 mt-6 border-t">
    <div className="flex items-center justify-between mb-6"><h2 className="text-2xl">{memory?'Edytuj wspomnienie':'Nowe wspomnienie'}</h2><Button size="icon" variant="ghost" aria-label="Zamknij formularz" onClick={onCancel} disabled={busy}><X/></Button></div>
    <form onSubmit={submit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2"><span className="block">Kraj</span><CountryPicker value={place} onChange={setPlace}/></div>
        <label className="space-y-2 block"><span className="block">Data randki</span><Input type="date" value={date} onChange={e=>setDate(e.target.value)} required/></label>
      </div>
      <label className="block space-y-2"><span>Wasze wspomnienia</span><Textarea value={note} onChange={e=>setNote(e.target.value)} rows={4} maxLength={10000}/></label>
      <fieldset><legend className="mb-2">Ocena wieczoru</legend><div className="flex gap-1">{[1,2,3,4,5].map(n=><Button key={n} type="button" size="icon" variant="ghost" aria-label={`Ocena ${n} z 5`} aria-pressed={rating===n} onClick={()=>setRating(rating===n?null:n)}><Star className={rating!==null && n<=rating?'fill-primary text-primary':'text-muted-foreground'}/></Button>)}</div></fieldset>
      <div className="space-y-3">
        <span className="block">Zdjęcia</span>
        <input ref={inputRef} type="file" accept="image/jpeg,image/png,image/webp" multiple className="sr-only" tabIndex={-1} aria-hidden onChange={e=>{addFiles(e.target.files);e.target.value='';}}/>
        <button type="button" onClick={()=>inputRef.current?.click()} onDragOver={e=>e.preventDefault()} onDrop={e=>{e.preventDefault();addFiles(e.dataTransfer.files);}}
          className="w-full rounded-lg border-2 border-dashed border-border hover:border-primary hover:bg-primary/5 transition-colors py-8 flex flex-col items-center gap-2 text-muted-foreground">
          <ImagePlus className="size-8 text-primary"/>
          <span className="text-foreground">{items.length?'Dodaj kolejne zdjęcia':'Dodaj zdjęcia z randki'}</span>
          <span className="text-xs">Kliknij lub upuść tutaj · JPG, PNG, WebP</span>
        </button>
        {items.length>0 && <><PhotoSorter items={items} onChange={setItems}/><p className="text-xs text-muted-foreground">Przeciągnij, aby zmienić kolejność. Pierwsze zdjęcie to okładka.</p></>}
      </div>
      {error && <p role="alert" className="text-sm text-primary">{error}</p>}
      <div className="flex gap-3"><Button disabled={busy} aria-busy={busy} type="submit">{busy && <Loader2 className="animate-spin"/>}Zapisz wspomnienie</Button><Button type="button" variant="ghost" onClick={onCancel} disabled={busy}>Anuluj</Button></div>
    </form>
  </section>;
}
