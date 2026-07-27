import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { countries, type Country } from "@/data/countries";
import { CountryCard } from "@/components/CountryCard";
import { Dices, RotateCw, Download } from "lucide-react";

const SITE_URL = "https://randka-dookola-swiata.lovable.app";
const TITLE = "Randka dookoła świata – wylosuj kraj na wieczór";
const DESCRIPTION =
  "Wylosuj kraj i zaplanuj randkę inspirowaną jego kulturą: tradycje, jedzenie, desery, napoje, rozrywka, filmy i muzyka.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Randka Dookoła Świata",
          url: SITE_URL,
          description: DESCRIPTION,
          inLanguage: "pl-PL",
        }),
      },
    ],
  }),
});

function Index() {
  const [country, setCountry] = useState<Country | null>(null);
  const [rolling, setRolling] = useState(false);
  const [tick, setTick] = useState(0);
  const [saving, setSaving] = useState(false);
  const [exportCountry, setExportCountry] = useState<Country | null>(null);
  const exportRef = useRef<HTMLDivElement>(null);

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

  const saveAsJpg = async () => {
    if (!country) return;
    setSaving(true);
    setExportCountry(country);
    try {
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(() => r(null))));
      const node = exportRef.current;
      if (!node) return;
      const { toJpeg } = await import("html-to-image");
      const bg = getComputedStyle(document.body).backgroundColor || "#1a0f0a";
      const dataUrl = await toJpeg(node, {
        quality: 0.95,
        pixelRatio: 2,
        width: 1000,
        height: node.scrollHeight,
        backgroundColor: bg,
        cacheBust: true,
      });
      const link = document.createElement("a");
      link.download = `randka-${country.name.replace(/\s+/g, "-").toLowerCase()}.jpg`;
      link.href = dataUrl;
      link.click();
    } catch (e) {
      console.error("Nie udało się zapisać obrazu", e);
    } finally {
      setExportCountry(null);
      setSaving(false);
    }
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
          <div ref={cardRef} key={rolling ? tick : "final"} className="bg-hero p-4 md:p-6 rounded-3xl">
            <CountryCard country={country} />
          </div>
        )}

        {country && !rolling && (
          <div className="flex justify-center mt-8">
            <button
              onClick={saveAsJpg}
              disabled={saving}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors font-display text-base disabled:opacity-60"
            >
              <Download className={`w-4 h-4 ${saving ? "animate-pulse" : ""}`} />
              {saving ? "Zapisywanie..." : "Zapisz jako JPG"}
            </button>
          </div>
        )}




        <footer className="text-center mt-20 text-xs text-muted-foreground/60 uppercase tracking-widest">
          Nieskończona liczba wieczorów
        </footer>
      </div>
    </main>
  );
}
