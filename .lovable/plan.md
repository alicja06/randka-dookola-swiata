# Plan: dodanie brakujących krajów

Wybieram 15 popularnych i różnorodnych kulturowo krajów z różnych regionów świata, żeby losowanie było ciekawsze i bardziej zbalansowane geograficznie.

## Kraje do dodania

**Europa (5):** Dania, Finlandia, Chorwacja, Rumunia, Serbia
**Azja (3):** Tajwan, Kambodża, Bangladesz
**Bliski Wschód / Kaukaz (2):** ZEA (Dubaj), Gruzja
**Afryka (2):** Zimbabwe, Madagaskar
**Ameryki (2):** Dominikana, Gwatemala
**Oceania (1):** Papua-Nowa Gwinea

## Zakres zmian

Dla każdego z 15 krajów uzupełnię wpisy w czterech plikach danych, dokładnie w tym samym formacie co istniejące pozycje:

- `src/data/countries.ts` — nazwa, region, tradycje, stereotypy, 4× jedzenie, 4× deser, filmy, muzyka, pomysł na randkę
- `src/data/drinks.ts` — 4 propozycje napojów (min. 1 bezalkoholowy)
- `src/data/entertainment.ts` — propozycje rozrywki / aktywności
- `src/data/outfits.ts` — po 4 propozycje stroju dla kobiety i mężczyzny

## Uwagi

- Nie zmieniam żadnego istniejącego kraju ani UI-a — tylko dopisuję nowe wpisy.
- Treści po polsku, w stylu zgodnym z istniejącymi pozycjami (lekki, randkowy ton).
- Regiony zgodne z tymi już używanymi w `countries.ts` (Europa, Azja, Afryka, Ameryka Północna/Południowa, Oceania).
