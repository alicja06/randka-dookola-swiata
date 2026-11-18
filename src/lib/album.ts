import {supabase} from '@/integrations/supabase/client';
import type {Tables} from '@/integrations/supabase/types';
import {validateMemory} from './album-validation';
export type Memory = Tables<'memories'> & {photos: (Tables<'memory_photos'> & {url: string})[]};
export async function loadAlbum() {
  const {data: couple,error} = await supabase.from('couples').select('*').maybeSingle();
  if(error) throw error;
  if(!couple) return {couple:null,memories:[] as Memory[],members:0};
  const [{data,error:memError},{count,error:memberError}] = await Promise.all([
    supabase.from('memories').select('*, memory_photos!memory_photos_memory_id_fkey(*)').eq('couple_id',couple.id).order('date_on',{ascending:false}),
    supabase.from('couple_members').select('*',{count:'exact',head:true}).eq('couple_id',couple.id),
  ]);
  if(memError || memberError) throw memError || memberError;
  const memories = await Promise.all((data ?? []).map(async m => ({...m,photos:await Promise.all(m.memory_photos.map(async p => {
    const {data:signed,error} = await supabase.storage.from('memories').createSignedUrl(p.path,3600);
    if(error) throw error;
    return {...p,url:signed.signedUrl};
  }))})));
  return {couple,memories,members:count ?? 0};
}
export async function saveMemory(coupleId:string,input:{country:string;date_on:string;note:string;rating:number|null},files:File[],existing?:Memory) {
  validateMemory(input);
  if(files.some(f => !['image/jpeg','image/png','image/webp'].includes(f.type) || f.size > 10*1024*1024)) throw new Error('Wybierz zdjęcia JPG, PNG lub WebP, do 10 MB każde.');
  const uploaded:string[]=[];
  const id=existing?.id ?? crypto.randomUUID();
  try {
    for(const file of files) {
      const path=`${coupleId}/${id}/${crypto.randomUUID()}.${file.type.split('/')[1]}`;
      const {error}=await supabase.storage.from('memories').upload(path,file);
      if(error) throw error;
      uploaded.push(path);
    }
    const result=existing
      ? await supabase.from('memories').update(input).eq('id',id)
      : await supabase.from('memories').insert({...input,id,couple_id:coupleId});
    if(result.error) throw result.error;
    if(uploaded.length) {
      const {error}=await supabase.from('memory_photos').insert(uploaded.map(path=>({path,memory_id:id,couple_id:coupleId})));
      if(error) {
        if(!existing) await supabase.from('memories').delete().eq('id',id);
        throw error;
      }
    }
  } catch(error) {
    if(uploaded.length) await supabase.storage.from('memories').remove(uploaded);
    throw error;
  }
}
export async function removePhoto(photo:Memory['photos'][number]) {
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