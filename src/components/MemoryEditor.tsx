import {useEffect,useState,type FormEvent} from 'react';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Star,X,ImagePlus} from 'lucide-react';
import {countries} from '@/data/countries';
import {saveMemory,type Memory} from '@/lib/album';

export function MemoryEditor({coupleId,country,memory,onDone,onCancel}:{coupleId:string;country?:string;memory?:Memory;onDone:()=>void;onCancel:()=>void}) {
  const [place,setPlace]=useState(memory?.country ?? country ?? countries[0]?.name ?? '');
  const [date,setDate]=useState(memory?.date_on ?? new Date().toLocaleDateString('en-CA'));
  const [note,setNote]=useState(memory?.note ?? '');
  const [rating,setRating]=useState<number|null>(memory?.rating ?? null);
  const [files,setFiles]=useState<File[]>([]);
  const [previews,setPreviews]=useState<string[]>([]);
  const [busy,setBusy]=useState(false);
  const [error,setError]=useState('');
  useEffect(()=>{const urls=files.map(f=>URL.createObjectURL(f));setPreviews(urls);return ()=>urls.forEach(URL.revokeObjectURL);},[files]);
  async function submit(e:FormEvent) {e.preventDefault();setBusy(true);setError('');try {await saveMemory(coupleId,{country:place,date_on:date,note,rating},files,memory);onDone();}catch(e){setError(e instanceof Error ? e.message:'Nie udało się zapisać wspomnienia.');}finally{setBusy(false);}}
  return <section className="border-y py-8 my-6">
    <div className="flex items-center justify-between mb-6"><h2 className="text-2xl">{memory?'Edytuj wspomnienie':'Nowe wspomnienie'}</h2><Button size="icon" variant="ghost" aria-label="Zamknij formularz" onClick={onCancel} disabled={busy}><X/></Button></div>
    <form onSubmit={submit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="space-y-2"><span>Kraj</span><select aria-label="Kraj" className="w-full h-10 rounded-md border bg-background px-3 text-foreground" value={place} onChange={e=>setPlace(e.target.value)}>{countries.map(c=><option key={c.name}>{c.name}</option>)}</select></label>
        <label className="space-y-2"><span>Data randki</span><Input type="date" value={date} onChange={e=>setDate(e.target.value)} required/></label>
      </div>
      <label className="block space-y-2"><span>Wasze wspomnienia</span><Textarea value={note} onChange={e=>setNote(e.target.value)} rows={4} maxLength={10000}/></label>
      <fieldset><legend className="mb-2">Ocena wieczoru</legend><div className="flex gap-1">{[1,2,3,4,5].map(n=><Button key={n} type="button" size="icon" variant="ghost" aria-label={`Ocena ${n} z 5`} aria-pressed={rating===n} onClick={()=>setRating(rating===n?null:n)}><Star className={rating!==null && n<=rating?'fill-primary text-primary':'text-muted-foreground'}/></Button>)}</div></fieldset>
      <label className="block space-y-2"><span className="flex gap-2 items-center"><ImagePlus className="size-4"/>Zdjęcia</span><Input type="file" accept="image/jpeg,image/png,image/webp" multiple onChange={e=>{setFiles(Array.from(e.target.files ?? []));setError('');}}/><span className="text-xs text-muted-foreground">JPG, PNG lub WebP · do 10 MB na zdjęcie</span></label>
      {previews.length>0 && <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">{previews.map((url,i)=><img key={url} src={url} alt={`Wybrane zdjęcie ${i+1}`} className="aspect-square w-full object-cover rounded-md"/>)}</div>}
      {error && <p role="alert" className="text-sm text-primary">{error}</p>}
      <Button disabled={busy} aria-busy={busy} type="submit">Zapisz wspomnienie</Button>
    </form>
  </section>;
}