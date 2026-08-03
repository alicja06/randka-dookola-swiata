import { Country } from "@/data/countries";
import { outfits } from "@/data/outfits";
import { drinks } from "@/data/drinks";
import { entertainment } from "@/data/entertainment";
import { Utensils, Film, Music, Sparkles, Theater, Shirt, Wine, Gamepad2, IceCream } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const sections = [
  { key: "traditions" as const, label: "Tradycje", icon: Sparkles },
  { key: "stereotypes" as const, label: "Stereotypy", icon: Theater },
  { key: "movies" as const, label: "Filmy", icon: Film },
  { key: "music" as const, label: "Muzyka", icon: Music },
];

function ItemList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="text-foreground/85 flex gap-2 leading-relaxed">
          <span aria-hidden className="text-primary mt-1.5 text-xs">◆</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Panel({
  label,
  icon: Icon,
  className = "",
  children,
}: {
  label: string;
  icon: LucideIcon;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-label={label}
      className={`bg-card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors ${className}`}
    >
      <div className="flex items-center gap-2 mb-4">
        <Icon aria-hidden className="w-4 h-4 text-primary" />
        <h4 className="font-display text-xl uppercase tracking-wider">{label}</h4>
      </div>
      {children}
    </section>
  );
}

export function CountryCard({ country, forExport = false }: { country: Country; forExport?: boolean }) {
  const outfit = outfits[country.name];
  const countryDrinks = drinks[country.name];
  const countryEntertainment = entertainment[country.name];

  return (
    <article className={`${forExport ? "" : "animate-in fade-in slide-in-from-bottom-8 duration-700"}`}>
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-gold mb-5 leading-tight pb-1">{country.name}</h2>
        <p className="text-muted-foreground italic">{country.region}</p>
      </div>

      {outfit && (
        <Panel label="Ubiór na wieczór" icon={Shirt} className="mb-4">
          <p className="text-xs text-muted-foreground mb-4 italic">Wybierz opcję, do której masz ubrania w szafie.</p>
          <div className={`grid ${forExport ? "grid-cols-2" : "md:grid-cols-2"} gap-6`}>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Ona</p>
              <ItemList items={outfit.woman} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">On</p>
              <ItemList items={outfit.man} />
            </div>
          </div>
        </Panel>
      )}

      <div className={`grid ${forExport ? "grid-cols-3" : "md:grid-cols-3"} gap-4 mb-4`}>
        <Panel label="Jedzenie" icon={Utensils}>
          <ItemList items={country.food} />
        </Panel>

        <Panel label="Desery" icon={IceCream}>
          <ItemList items={country.desserts} />
        </Panel>

        {countryDrinks && (
          <Panel label="Napoje" icon={Wine}>
            <ItemList items={countryDrinks} />
          </Panel>
        )}
      </div>

      {countryEntertainment && (
        <Panel label="Rozrywka" icon={Gamepad2} className="mb-4">
          <ItemList items={countryEntertainment} />
        </Panel>
      )}

      <div className={`grid ${forExport ? "grid-cols-2" : "md:grid-cols-2"} gap-4`}>
        {sections.map(({ key, label, icon }) => (
          <Panel key={key} label={label} icon={icon}>
            <ItemList items={country[key]} />
          </Panel>
        ))}
      </div>
    </article>
  );
}
