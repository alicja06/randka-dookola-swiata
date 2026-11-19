import {DndContext,closestCenter,PointerSensor,TouchSensor,KeyboardSensor,useSensor,useSensors,type DragEndEvent} from '@dnd-kit/core';
import {SortableContext,arrayMove,rectSortingStrategy,useSortable,sortableKeyboardCoordinates} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {X} from 'lucide-react';
import {Button} from '@/components/ui/button';
import type {PhotoItem} from '@/lib/album';
const src=(i:PhotoItem)=>i.kind==='new'?i.url:i.photo.url;
function Tile({item,index,onRemove}:{item:PhotoItem;index:number;onRemove:()=>void}) {
  const {attributes,listeners,setNodeRef,transform,transition,isDragging}=useSortable({id:item.key});
  return <div ref={setNodeRef} style={{transform:CSS.Transform.toString(transform),transition}} className={`relative rounded-md overflow-hidden touch-none ${isDragging?'z-10 opacity-80 ring-2 ring-primary':''}`}>
    <img src={src(item)} alt={`Zdjęcie ${index+1}`} {...attributes} {...listeners} className="aspect-square w-full object-cover cursor-grab active:cursor-grabbing select-none" draggable={false}/>
    {index===0 && <span className="absolute left-1.5 bottom-1.5 rounded bg-primary px-1.5 py-0.5 text-[10px] font-medium text-primary-foreground">Okładka</span>}
    <Button type="button" size="icon" variant="secondary" className="absolute top-1.5 right-1.5 size-7 rounded-full" aria-label={`Usuń zdjęcie ${index+1}`} onPointerDown={e=>e.stopPropagation()} onClick={onRemove}><X className="size-4"/></Button>
  </div>;
}
export function PhotoSorter({items,onChange}:{items:PhotoItem[];onChange:(i:PhotoItem[])=>void}) {
  const sensors=useSensors(useSensor(PointerSensor,{activationConstraint:{distance:6}}),useSensor(TouchSensor,{activationConstraint:{delay:150,tolerance:6}}),useSensor(KeyboardSensor,{coordinateGetter:sortableKeyboardCoordinates}));
  function end(e:DragEndEvent) {
    if(!e.over || e.active.id===e.over.id) return;
    const from=items.findIndex(i=>i.key===e.active.id),to=items.findIndex(i=>i.key===e.over!.id);
    onChange(arrayMove(items,from,to));
  }
  return <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={end}>
    <SortableContext items={items.map(i=>i.key)} strategy={rectSortingStrategy}>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">{items.map((it,i)=><Tile key={it.key} item={it} index={i} onRemove={()=>onChange(items.filter(x=>x.key!==it.key))}/>)}</div>
    </SortableContext>
  </DndContext>;
}
