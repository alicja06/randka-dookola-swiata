import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { countries, type Country } from "@/data/countries";
import { CountryCard } from "@/components/CountryCard";
import { useCountryBag } from "@/hooks/useCountryBag";
import { Dices, RotateCw, Download } from "lucide-react";

const SITE_URL = "https://randka-dookola-swiata.lovable.app";
const TITLE = "Randka dookoła świata – wylosuj kraj na wieczór";
const DESCRIPTION =
  "Wylosuj kraj i zaplanuj randkę inspirowaną jego kulturą: tradycje, jedzenie, desery, napoje, rozrywka, filmy i muzyka.";
const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/af1ea1c8-146a-45f4-bf8b-9bd7968f6dab";

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
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:image", content: OG_IMAGE },
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

  const names = useMemo(() => countries.map((c) => c.name), []);
  const byName = useMemo(
    () => new Map(countries.map((c) => [c.name, c] as const)),
    [],
  );
  const { next } = useCountryBag(names);

  const draw = () => {
    setRolling(true);
    const final = byName.get(next())!;
    let count = 0;
    const interval = setInterval(() => {
      setTick((t) => t + 1);
      setCountry(countries[Math.floor(Math.random() * countries.length)]);
      count++;
      if (count > 18) {
        clearInterval(interval);
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
      if (!node) throw new Error("Brak podglądu do zapisu");
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
      toast.success("Zapisano obrazek JPG", {
        description: `Karta „${country.name}” trafiła do pobranych plików.`,
      });
    } catch (e) {
      console.error("Nie udało się zapisać obrazu", e);
      toast.error("Nie udało się zapisać obrazka", {
        description: "Spróbuj ponownie lub zrób to na innej przeglądarce.",
      });
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
            aria-label={country ? "Wylosuj kolejny kraj" : "Wylosuj kraj"}
            aria-busy={rolling}
            className={`group relative inline-flex items-center gap-3 px-8 py-5 rounded-full bg-primary text-primary-foreground font-display text-xl font-semibold shadow-glow hover:scale-105 active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-70 disabled:cursor-not-allowed ${
              !country && !rolling ? "animate-pulse-soft" : ""
            }`}
          >
            {country ? (
              <RotateCw aria-hidden className={`w-5 h-5 ${rolling ? "animate-spin" : ""}`} />
            ) : (
              <Dices aria-hidden className={`w-5 h-5 ${rolling ? "animate-spin" : ""}`} />
            )}
            {rolling ? "Losowanie..." : country ? "Losuj ponownie" : "Wylosuj kraj"}
          </button>
        </div>

        <div aria-live="polite" className="sr-only">
          {rolling ? "Trwa losowanie kraju" : country ? `Wylosowany kraj: ${country.name}` : ""}
        </div>

        <div className={country ? "min-h-[70vh]" : ""}>
          {country && (
            <div key={rolling ? tick : "final"} className="bg-hero p-4 md:p-6 rounded-3xl">
              <CountryCard country={country} />
            </div>
          )}
        </div>

        {exportCountry && (
          <div aria-hidden className="fixed left-0 top-0 pointer-events-none opacity-0 -z-10" style={{ width: 1000 }}>
            <div ref={exportRef} className="bg-hero p-6 rounded-3xl" style={{ width: 1000 }}>
              <CountryCard country={exportCountry} forExport />
            </div>
          </div>
        )}

        {country && !rolling && (
          <div className="flex justify-center mt-8 animate-in fade-in duration-500">
            <button
              onClick={saveAsJpg}
              disabled={saving}
              aria-label="Zapisz kartę kraju jako plik JPG"
              aria-busy={saving}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition-colors font-display text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60"
            >
              <Download aria-hidden className={`w-4 h-4 ${saving ? "animate-pulse" : ""}`} />
              {saving ? "Zapisywanie..." : "Zapisz jako JPG"}
            </button>
          </div>
        )}

        <footer className="text-center mt-20 text-xs text-muted-foreground uppercase tracking-widest">
          Nieskończona liczba wieczorów
        </footer>
      </div>
    </main>
  );
}
