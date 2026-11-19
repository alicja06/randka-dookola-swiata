import {supabase} from '@/integrations/supabase/client';
import type {Tables} from '@/integrations/supabase/types';
import {validateMemory} from './album-validation';
export type Photo = Tables<'memory_photos'> & {url: string};
export type Memory = Tables<'memories'> & {photos: Photo[]};
export type PhotoItem = {key:string;kind:'existing';photo:Photo} | {key:string;kind:'new';file:File;url:string};

export async function loadAlbum() {
  const {data: couple,error} = await supabase.from('couples').select('*').maybeSingle();
  if(error) throw error;
  if(!couple) return {couple:null,memories:[] as Memory[],members:0};
  const [{data,error:memError},{count,error:memberError}] = await Promise.all([
    supabase.from('memories').select('*, memory_photos!memory_photos_memory_id_fkey(*)').eq('couple_id',couple.id).order('date_on',{ascending:false}),
    supabase.from('couple_members').select('*',{count:'exact',head:true}).eq('couple_id',couple.id),
  ]);
  if(memError || memberError) throw memError || memberError;
  const paths=(data ?? []).flatMap(m=>m.memory_photos.map(p=>p.path));
  const urls=new Map<string,string>();
  if(paths.length) {
    const {data:signed,error:sErr}=await supabase.storage.from('memories').createSignedUrls(paths,3600);
    if(sErr) throw sErr;
    signed?.forEach(s=>{if(s.path && s.signedUrl) urls.set(s.path,s.signedUrl);});
  }
  const memories:Memory[]=(data ?? []).map(({memory_photos,...m})=>({...m,photos:[...memory_photos]
    .sort((a,b)=>a.position-b.position || a.created_at.localeCompare(b.created_at))
    .map(p=>({...p,url:urls.get(p.path) ?? ''}))}));
  return {couple,memories,members:count ?? 0};
}

/** Shrinks big phone photos before upload so saving is fast. */
async function compress(file:File):Promise<Blob> {
  try {
    const bmp=await createImageBitmap(file);
    const scale=Math.min(1,1920/Math.max(bmp.width,bmp.height));
    const canvas=document.createElement('canvas');
    canvas.width=Math.round(bmp.width*scale);canvas.height=Math.round(bmp.height*scale);
    canvas.getContext('2d')!.drawImage(bmp,0,0,canvas.width,canvas.height);
    bmp.close();
    const blob=await new Promise<Blob|null>(r=>canvas.toBlob(r,'image/jpeg',0.85));
    return blob && blob.size<file.size ? blob : file;
  } catch { return file; }
}

export async function saveMemory(coupleId:string,input:{country:string;date_on:string;note:string;rating:number|null},items:PhotoItem[],existing?:Memory) {
  validateMemory(input);
  const newItems=items.filter((i):i is Extract<PhotoItem,{kind:'new'}>=>i.kind==='new');
  if(newItems.some(i => !['image/jpeg','image/png','image/webp'].includes(i.file.type) || i.file.size > 25*1024*1024)) throw new Error('Wybierz zdjęcia JPG, PNG lub WebP.');
  const id=existing?.id ?? crypto.randomUUID();
  const uploaded=new Map<string,string>();
  try {
    await Promise.all(newItems.map(async it=>{
      const blob=await compress(it.file);
      const ext=blob.type==='image/jpeg'?'jpg':it.file.type.split('/')[1];
      const path=`${coupleId}/${id}/${crypto.randomUUID()}.${ext}`;
      const {error}=await supabase.storage.from('memories').upload(path,blob,{contentType:blob.type||it.file.type});
      if(error) throw error;
      uploaded.set(it.key,path);
    }));
    const result=existing
      ? await supabase.from('memories').update(input).eq('id',id)
      : await supabase.from('memories').insert({...input,id,couple_id:coupleId});
    if(result.error) throw result.error;
    const rows=items.flatMap((it,position)=>it.kind==='new'?[{path:uploaded.get(it.key)!,memory_id:id,couple_id:coupleId,position}]:[]);
    if(rows.length) {
      const {error}=await supabase.from('memory_photos').insert(rows);
      if(error) { if(!existing) await supabase.from('memories').delete().eq('id',id); throw error; }
    }
  } catch(error) {
    if(uploaded.size) await supabase.storage.from('memories').remove([...uploaded.values()]);
    throw error;
  }
  if(existing) {
    const kept=new Set(items.flatMap(i=>i.kind==='existing'?[i.photo.id]:[]));
    const removed=existing.photos.filter(p=>!kept.has(p.id));
    await Promise.all([
      ...removed.map(removePhoto),
      ...items.flatMap((it,position)=>it.kind==='existing' && it.photo.position!==position
        ? [supabase.from('memory_photos').update({position}).eq('id',it.photo.id).then(r=>{if(r.error) throw r.error;})] : []),
    ]);
  }
}
export async function removePhoto(photo:Photo) {
  const {error}=await supabase.storage.from('memories').remove([photo.path]);
  if(error) throw error;
  const result=await supabase.from('memory_photos').delete().eq('id',photo.id);
  if(result.error) throw result.error;
}
export async function removeMemory(memory:Memory) {
  if(memory.photos.length) {
    const {error}=await supabase.storage.from('memories').remove(memory.photos.map(p=>p.path));
    if(error) throw error;
  }
  const {error}=await supabase.from('memories').delete().eq('id',memory.id);
  if(error) throw error;
}
