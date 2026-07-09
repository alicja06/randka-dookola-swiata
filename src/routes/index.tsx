import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { countries, type Country } from "@/data/countries";
import { CountryCard } from "@/components/CountryCard";
import { Dices, RotateCw, Download } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Randka dookoła świata – wylosuj kraj" },
      { name: "description", content: "Wylosuj jeden z 50 krajów i odkryj pomysł na randkę: tradycje, jedzenie, filmy i muzykę." },
    ],
  }),
});

function Index() {
  const [country, setCountry] = useState<Country | null>(null);
  const [rolling, setRolling] = useState(false);
  const [tick, setTick] = useState(0);

  const draw = () => {
    setRolling(true);
    let count = 0;
    const interval = setInterval(() => {
      setTick((t) => t + 1);
      setCountry(countries[Math.floor(Math.random() * countries.length)]);
      count++;
      if (count > 18) {
        clearInterval(interval);
        const final = countries[Math.floor(Math.random() * countries.length)];
        setCountry(final);
        setRolling(false);
      }
    }, 70);
  };

  return (
    <main className="min-h-screen bg-hero">
      <div className="max-w-4xl mx-auto px-5 py-12 md:py-20">
        <header className="text-center mb-12">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary/80 mb-4">Randka Dookoła Świata</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight tracking-normal overflow-visible mb-5 pb-1">
            Jeden kraj<br />
            <span className="inline-block px-2 -mx-2 pb-1 text-gold italic">Jedna randka</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Wylosuj jeden spośród wielu krajów na całym świecie i wybierz się na niezapomnianą randkę inspirowaną kulturą danego kraju!
          </p>
        </header>

        <div className="flex justify-center mb-16">
          <button
            onClick={draw}
            disabled={rolling}
            className="group relative inline-flex items-center gap-3 px-8 py-5 rounded-full bg-primary text-primary-foreground font-display text-xl font-semibold shadow-glow hover:scale-105 active:scale-95 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {country ? <RotateCw className={`w-5 h-5 ${rolling ? "animate-spin" : ""}`} /> : <Dices className={`w-5 h-5 ${rolling ? "animate-spin" : ""}`} />}
            {rolling ? "Losowanie..." : country ? "Losuj ponownie" : "Wylosuj kraj"}
          </button>
        </div>

        {country && (
          <div key={rolling ? tick : "final"}>
            <CountryCard country={country} />
          </div>
        )}




        <footer className="text-center mt-20 text-xs text-muted-foreground/60 uppercase tracking-widest">
          Nieskończona liczba wieczorów
        </footer>
      </div>
    </main>
  );
}
