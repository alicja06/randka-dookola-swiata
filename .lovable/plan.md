# Plan usprawnień aplikacji "Randka Dookoła Świata"

## Odpowiedź: losowanie bez powtórek

Tak, da się. Mechanizm to tzw. "worek losów": aplikacja tasuje całą listę krajów i wyciąga po jednym, aż worek się opróżni — dopiero wtedy tasuje wszystko od nowa. Dzięki temu żaden kraj nie powtórzy się, dopóki nie zobaczysz wszystkich.

Jak to działa w praktyce:
- Stan worka zapisuje się w pamięci przeglądarki (localStorage) na Twoim urządzeniu.
- Telefon i komputer mają osobne worki — na każdym urządzeniu przejdziesz przez pełną listę niezależnie.
- Inna osoba (inna przeglądarka, inne urządzenie) ma własny worek i nic Wam się nie miesza; dwie osoby mogą losować równocześnie bez konfliktu.
- Tryb prywatny/incognito lub wyczyszczenie danych przeglądarki resetuje worek.
- Wspólna, współdzielona pula dla wszystkich użytkowników wymagałaby konta i bazy danych — nie robimy tego tutaj.

Dodam też mały licznik "Wylosowano X ze 120" oraz przycisk resetu worka.

## Zakres zmian

### 1. Losowanie bez powtórek
Tasowany worek krajów zapisywany w przeglądarce, licznik postępu i możliwość resetu.

Pliki: `src/routes/index.tsx`, nowy hook w `src/hooks/`

### 2. Poprawa dostępności (a11y)
- `aria-label` na przycisku losowania i przycisku zapisu JPG.
- Ikony dekoracyjne oznaczone `aria-hidden`, teksty stanu czytelne dla czytników ekranu.
- Region `aria-live` ogłaszający wylosowany kraj oraz stan zapisu.
- Wyraźny opis stanu `disabled` (np. "Trwa losowanie", "Trwa zapisywanie").
- Widoczny focus na przyciskach i sprawdzenie kontrastu (złoto na ciemnym tle, teksty pomocnicze) — poprawa tokenów, jeśli któryś nie spełnia WCAG AA.

Pliki: `src/routes/index.tsx`, `src/components/CountryCard.tsx`

### 3. Czytelny feedback przy zapisie JPG
- Komunikat błędu widoczny dla użytkownika, gdy zapis się nie powiedzie (dziś błąd trafia tylko do konsoli).
- Komunikat sukcesu po pobraniu pliku.
- Wykorzystanie powiadomień typu toast, spójnych ze stylem aplikacji.

Plik: `src/routes/index.tsx`

### 4. Obraz podglądowy (OG image)
Wygenerowanie obrazka 1200x630 z nazwą aplikacji i hasłem, w palecie złoto/terakota, oraz dodanie tagów `og:image` i `twitter:image`. Uwaga: serwisy społecznościowe cache'ują podglądy, więc zmiana pojawi się dopiero po odświeżeniu po ich stronie.

Pliki: nowy plik obrazka, `src/routes/index.tsx`

### 5. Porządki w kodzie
- Usunięcie pustych linii i nieużywanych fragmentów.
- Uporządkowanie stałych (tytuł, opis, URL) w jednym miejscu.
- Wydzielenie powtarzającego się układu listy w `CountryCard.tsx` do małego komponentu pomocniczego (jedna definicja zamiast siedmiu kopii).

Pliki: `src/routes/index.tsx`, `src/components/CountryCard.tsx`

### 6. Mikrointerakcje i wykończenie
- Delikatne pulsowanie przycisku losowania przed pierwszym użyciem.
- Płynne pojawianie się przycisku "Zapisz jako JPG".
- Stabilna wysokość karty podczas animacji losowania, żeby strona nie skakała.
- Poszanowanie ustawienia "ogranicz animacje" w systemie (`prefers-reduced-motion`).

Plik: `src/routes/index.tsx`, `src/styles.css`

## Co pozostaje bez zmian
- Brak filtrowania po regionie.
- Brak listy ulubionych i historii losowań.
- Brak osobnych podstron dla krajów.
- Brak kont użytkowników i bazy danych.

## Weryfikacja
- Kilkanaście losowań pod rząd bez powtórki i poprawny reset po wyczerpaniu listy.
- Test zapisu JPG: komunikat sukcesu oraz komunikat błędu w razie niepowodzenia.
- Przegląd karty czytnikiem ekranu i klawiaturą (tab, enter).
- Sprawdzenie typów i budowania projektu.
