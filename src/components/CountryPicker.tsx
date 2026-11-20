import {useState} from 'react';
import {Check,ChevronsUpDown} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Popover,PopoverContent,PopoverTrigger} from '@/components/ui/popover';
import {Command,CommandEmpty,CommandGroup,CommandInput,CommandItem,CommandList} from '@/components/ui/command';
import {countries} from '@/data/countries';
const sorted=[...countries].map(c=>c.name).sort((a,b)=>a.localeCompare(b,'pl'));
export function CountryPicker({value,onChange}:{value:string;onChange:(v:string)=>void}) {
  const [open,setOpen]=useState(false);
  return <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild><Button type="button" variant="outline" role="combobox" aria-expanded={open} aria-label="Kraj" className="w-full justify-between font-normal">{value || 'Wybierz kraj'}<ChevronsUpDown className="opacity-50"/></Button></PopoverTrigger>
    <PopoverContent className="country-picker-surface p-0 w-[var(--radix-popover-trigger-width)] max-w-[calc(100vw-2rem)] min-w-64 border shadow-xl" align="start">
      <Command className="country-picker-surface"><CommandInput placeholder="Wpisz nazwę kraju…"/><CommandList><CommandEmpty>Nie znaleziono kraju.</CommandEmpty><CommandGroup>
        {sorted.map(n=><CommandItem key={n} value={n} onSelect={()=>{onChange(n);setOpen(false);}}><Check className={n===value?'opacity-100':'opacity-0'}/>{n}</CommandItem>)}
      </CommandGroup></CommandList></Command>
    </PopoverContent>
  </Popover>;
}
