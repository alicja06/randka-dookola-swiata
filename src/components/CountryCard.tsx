import { Country } from "@/data/countries";
import { outfits } from "@/data/outfits";
import { drinks } from "@/data/drinks";
import { Utensils, Film, Music, Sparkles, Theater, Heart, Shirt, Wine } from "lucide-react";

const sections = [
  { key: "traditions" as const, label: "Tradycje", icon: Sparkles },
  { key: "stereotypes" as const, label: "Stereotypy", icon: Theater },
  { key: "food" as const, label: "Jedzenie", icon: Utensils },
  { key: "movies" as const, label: "Filmy", icon: Film },
  { key: "music" as const, label: "Muzyka", icon: Music },
];

export function CountryCard({ country }: { country: Country }) {
  const outfit = outfits[country.name];
  const countryDrinks = drinks[country.name];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-7xl font-display font-bold text-gold mb-3">{country.name}</h2>
        <p className="text-muted-foreground italic">{country.region}</p>
      </div>

      <div className="bg-card-gradient border border-border rounded-3xl p-6 md:p-8 mb-6 shadow-glow">
        <div className="flex items-center gap-3 mb-3">
          <Heart className="w-5 h-5 text-accent fill-accent" />
          <h3 className="font-display text-2xl">Wasz pomysł na randkę</h3>
        </div>
        <p className="text-lg text-foreground/90 leading-relaxed">{country.dateIdea}</p>
      </div>

      {outfit && (
        <div className="bg-card-gradient border border-border rounded-2xl p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <Shirt className="w-4 h-4 text-primary" />
            <h4 className="font-display text-xl uppercase tracking-wider">Ubiór na wieczór</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Ona</p>
              <p className="text-foreground/85 leading-relaxed">{outfit.woman}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">On</p>
              <p className="text-foreground/85 leading-relaxed">{outfit.man}</p>
            </div>
          </div>
        </div>
      )}

      {countryDrinks && (
        <div className="bg-card-gradient border border-border rounded-2xl p-6 mb-4 hover:border-primary/40 transition-colors">
          <div className="flex items-center gap-2 mb-4">
            <Wine className="w-4 h-4 text-primary" />
            <h4 className="font-display text-xl uppercase tracking-wider">Napoje</h4>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
            {countryDrinks.map((d, i) => (
              <li key={i} className="text-foreground/85 flex gap-2 leading-relaxed">
                <span className="text-primary mt-1.5 text-xs">◆</span>
                <span>{d}</span>
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
