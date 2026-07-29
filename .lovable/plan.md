# Plan usprawnień aplikacji "Randka Dookoła Świata"

## Cel
Poprawić jakość danych, dostępność i wykończenie aplikacji bez wprowadzania nowych funkcji losowania, filtrowania czy zapisywania historii.

## Zakres zmian

### 1. Wyrównanie danych do 4 pozycji na sekcję
Obecnie jedzenie, desery i napoje mają po 4 pozycje, natomiast tradycje, stereotypy, filmy, muzyka i rozrywka mają po 3. Planuje się uzupełnienie brakujących pozycji we wszystkich krajach, aby każda sekcja zawierała dokładnie 4 propozycje.

Pliki: `src/data/countries.ts`, `src/data/entertainment.ts`

### 2. Poprawa dostępności (a11y)
- Dodanie atrybutów `aria-label` do przycisków losowania i zapisu.
- Zastąpienie samych ikon tekstowymi etykietami lub opisami dla czytników ekranu.
- Upewnienie się, że przyciski w stanie `disabled` mają wyraźny opis stanu.
- Sprawdzenie kontrastów kolorów (złoto na ciemnym tle, tekst pomocniczy).

Plik: `src/routes/index.tsx`, `src/components/CountryCard.tsx`

### 3. Lepszy feedback przy losowaniu i zapisie
- Dodanie wizualnego wskaźnika postępu podczas animacji losowania (np. pasek lub licznik klatek).
- Wyświetlenie czytelnego komunikatu, gdy zapis JPG się nie powiedzie (obecnie błąd trafia tylko do konsoli).
- Dodanie stanu sukcesu po zapisaniu obrazka.

Plik: `src/routes/index.tsx`

### 4. Obraz podglądowy dla mediów społecznościowych (OG image)
Wygenerowanie dedykowanego obrazka Open Graph (1200x630) z nazwą aplikacji i tagline, a następnie dodanie tagów `og:image` i `twitter:image` w metadanych strony. Poprawi to wygląd linku przy udostepnianiu.

Plik: `src/routes/index.tsx`, nowy plik w `public/og-image.jpg`

### 5. Porządki w kodzie
- Usunięcie nieużywanych importów i pustych linii.
- Wydzielenie stałych (tytuł, opis, URL) do osobnego pliku konfiguracyjnego lub uporządkowanie ich na górze komponentu.
- Ujednolicenie powtarzających się fragmentów list w `CountryCard.tsx` (opcjonalnie drobny komponent pomocniczy).

Pliki: `src/routes/index.tsx`, `src/components/CountryCard.tsx`

### 6. Mikrointerakcje i wykończenie
- Delikatne pulsowanie przycisku losowania przed pierwszym użyciem.
- Płynne pojawianie się przycisku "Zapisz jako JPG" po zakończeniu losowania.
- Upewnienie się, że karta kraju nie skacze podczas animacji losowania.

Plik: `src/routes/index.tsx`

## Co pozostaje bez zmian
- Mechanizm losowania pozostaje czysto losowy (bez historii i bez blokady powtórek).
- Nie dodaje się filtrowania po regionie.
- Nie dodaje się listy ulubionych ani historii losowań.
- Nie tworzy się osobnych podstron dla krajów.

## Jak zweryfikujemy efekt
- Ręczne przewinięcie kilku losowych krajów i sprawdzenie, czy wszystkie sekcje mają po 4 pozycje.
- Test zapisu JPG z wyłączonymi uprawnieniami do pobierania (oczekiwany komunikat błędu).
- Podgląd źródła strony pod kątem meta tagów OG oraz `og:image`.
- Sprawdzenie typów i builda (`bunx tsgo --noEmit` oraz build Vite).
