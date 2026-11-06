# Analiza gotowości do PWA (Android) — bez zmian w kodzie

## Wyniki analizy

1. **Technologia**: TanStack Start v1 (React 19, renderowanie po stronie serwera), Vite 7, Tailwind v4, hosting typu edge (Cloudflare Workers). Nagłówek strony (meta, linki) definiowany w `src/routes/__root.tsx`. Brak folderu `public/`.
2. **Manifest**: nie istnieje (brak `manifest.json` / `manifest.webmanifest`).
3. **Pola manifestu** (name, short_name, start_url, display, ikony): brak — bo brak manifestu.
4. **Ikony 192x192 i 512x512**: brak. Brak też favicony i `apple-touch-icon`.
5. **Service Worker**: nie istnieje, brak rejestracji — to dobrze, nic nie trzeba sprzątać.
6. **Vite / vite-plugin-pwa**: Vite jest używany, plugin technicznie da się dodać, ale **nie jest potrzebny** do instalacji. Potrzebny tylko dla trybu offline (i wymaga zabezpieczeń, by nie psuł podglądu).
7. **Tryb standalone**: obecnie nie — bez manifestu z `display: "standalone"` Android otworzy stronę jako zwykłą kartę/skrót. Brak też `theme-color`.

## Już przygotowane
- HTTPS na opublikowanym adresie, poprawny `viewport`, `lang="pl"`, tytuł i opisy.
- Aplikacja działa w całości w przeglądarce (dane krajów w kodzie, worek losów w pamięci urządzenia) — w trybie zainstalowanym zachowa się tak samo.

## Brakuje
- Manifest z nazwą, short_name, start_url, display: standalone, kolorami i ikonami.
- Ikony 192, 512 (w tym wersja „maskable” dla Androida), apple-touch-icon 180, favicon.
- Tagi `manifest`, `theme-color`, `apple-touch-icon` w nagłówku.

## Pliki do ewentualnej modyfikacji
- Nowy: `public/manifest.webmanifest`
- Nowe: `public/icon-192.png`, `public/icon-512.png`, `public/icon-maskable-512.png`, `public/apple-touch-icon.png`, `public/favicon.png`
- Edycja: `src/routes/__root.tsx` — tylko dodanie linków/meta w `head()`; reszta bez zmian.

## Rekomendowany minimalny zakres
Wariant „tylko instalacja” (bez Service Workera i bez vite-plugin-pwa):
- name: „Randka Dookoła Świata”, short_name: „Randka”, start_url: „/”, scope: „/”, display: „standalone”, kolory tła/motywu zgodne z obecnym ciemnym tłem i złotym akcentem.
- Wygenerowanie ikony w stylu aplikacji (złoto na ciemnym tle) w wymaganych rozmiarach.
- Zero zmian w wyglądzie, danych, losowaniu i zapisie JPG.

Offline (vite-plugin-pwa) — tylko jeśli zechcesz; działałby wyłącznie w opublikowanej wersji, nie w podglądzie edytora.

Uwaga: na Androidzie instalacja przez Chrome → menu → „Zainstaluj aplikację” / „Dodaj do ekranu głównego”. Zmiany niektórych pól manifestu po instalacji mogą wymagać ponownej instalacji.
