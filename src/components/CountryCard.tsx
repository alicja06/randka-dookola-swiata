import { Country } from "@/data/countries";
import { outfits } from "@/data/outfits";
import { drinks } from "@/data/drinks";
import { entertainment } from "@/data/entertainment";
import { Utensils, Film, Music, Sparkles, Theater, Shirt, Wine, Gamepad2, IceCream } from "lucide-react";

const sections = [
  { key: "traditions" as const, label: "Tradycje", icon: Sparkles },
  { key: "stereotypes" as const, label: "Stereotypy", icon: Theater },
  { key: "movies" as const, label: "Filmy", icon: Film },
  { key: "music" as const, label: "Muzyka", icon: Music },
];

export function CountryCard({ country }: { country: Country }) {
  const outfit = outfits[country.name];
  const countryDrinks = drinks[country.name];
  const countryEntertainment = entertainment[country.name];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-gold mb-5 leading-tight pb-1">{country.name}</h2>
        <p className="text-muted-foreground italic">{country.region}</p>
      </div>

      {outfit && (
        <div className="bg-card-gradient border border-border rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <Shirt className="w-4 h-4 text-primary" />
            <h4 className="font-display text-xl uppercase tracking-wider">Ubiór na wieczór</h4>
          </div>
          <p className="text-xs text-muted-foreground mb-4 italic">Wybierz opcję, do której masz ubrania w szafie.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Ona</p>
              <ul className="space-y-2">
                {outfit.woman.map((o, i) => (
                  <li key={i} className="text-foreground/85 flex gap-2 leading-relaxed">
                    <span className="text-primary mt-1.5 text-xs">◆</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">On</p>
              <ul className="space-y-2">
                {outfit.man.map((o, i) => (
                  <li key={i} className="text-foreground/85 flex gap-2 leading-relaxed">
                    <span className="text-primary mt-1.5 text-xs">◆</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-4 mb-4">
        <div className="bg-card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <Utensils className="w-4 h-4 text-primary" />
            <h4 className="font-display text-xl uppercase tracking-wider">Jedzenie</h4>
          </div>
          <ul className="space-y-2">
            {country.food.map((item, i) => (
              <li key={i} className="text-foreground/85 flex gap-2 leading-relaxed">
                <span className="text-primary mt-1.5 text-xs">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <IceCream className="w-4 h-4 text-primary" />
            <h4 className="font-display text-xl uppercase tracking-wider">Desery</h4>
          </div>
          <ul className="space-y-2">
            {country.desserts.map((item, i) => (
              <li key={i} className="text-foreground/85 flex gap-2 leading-relaxed">
                <span className="text-primary mt-1.5 text-xs">◆</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {countryDrinks && (
          <div className="bg-card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Wine className="w-4 h-4 text-primary" />
              <h4 className="font-display text-xl uppercase tracking-wider">Napoje</h4>
            </div>
            <ul className="space-y-2">
              {countryDrinks.map((d, i) => (
                <li key={i} className="text-foreground/85 flex gap-2 leading-relaxed">
                  <span className="text-primary mt-1.5 text-xs">◆</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {countryEntertainment && (
        <div className="bg-card-gradient border border-border rounded-2xl p-6 mb-4 hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <Gamepad2 className="w-4 h-4 text-primary" />
            <h4 className="font-display text-xl uppercase tracking-wider">Rozrywka</h4>
          </div>
          <ul className="space-y-2">
            {countryEntertainment.map((e, i) => (
              <li key={i} className="text-foreground/85 flex gap-2 leading-relaxed">
                <span className="text-primary mt-1.5 text-xs">◆</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        {sections.map(({ key, label, icon: Icon }) => (
          <div key={key} className="bg-card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 mb-4">
              <Icon className="w-4 h-4 text-primary" />
              <h4 className="font-display text-xl uppercase tracking-wider">{label}</h4>
            </div>
            <ul className="space-y-2">
              {country[key].map((item, i) => (
                <li key={i} className="text-foreground/85 flex gap-2 leading-relaxed">
                  <span className="text-primary mt-1.5 text-xs">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
