## Co zrobię

### 1. Nowe kraje (7)
Malediwy, Paragwaj, Panama, Armenia, Białoruś, Czarnogóra, Macedonia Północna — każdy z pełnym kompletem danych we wszystkich czterech plikach: tradycje, stereotypy, 4 dania, 4 desery, filmy, muzyka, 4 napoje, 3 propozycje rozrywki oraz po 4 propozycje stroju dla kobiety i mężczyzny.

### 2. Ujednolicenie regionów
Obecnie nazwy podregionów są niespójne (np. „Skandynawia” obok „Europa Północna”, samo „Afryka” obok „Afryka Wschodnia”, „Eurazja” dla Turcji, „Kaukaz” dla Gruzji). Ujednolicę do spójnego zestawu:

```text
Europa Zachodnia / Północna / Środkowa / Wschodnia / Południowa
Azja Wschodnia / Południowo-Wschodnia / Południowa / Środkowa / Zachodnia (Bliski Wschód)
Afryka Północna / Zachodnia / Wschodnia / Południowa
Ameryka Północna / Środkowa / Południowa, Karaiby, Oceania
```
Konkretnie: Skandynawia → Europa Północna; Turcja (Eurazja) i Gruzja, Armenia (Kaukaz) → Bliski Wschód / Azja Zachodnia; RPA, Zimbabwe i inne z ogólnego „Afryka” → właściwy podregion; Kostaryka, Gwatemala, Panama → Ameryka Środkowa.

### 3. Porządki
Usunę nieużywane pole `flag` z typu i wszystkich wpisów w `src/data/countries.ts` (nigdzie nie jest renderowane).

## Szczegóły techniczne
- Pliki: `src/data/countries.ts`, `drinks.ts`, `entertainment.ts`, `outfits.ts`; typ `Country` traci pole `flag`.
- Po zmianach: sprawdzenie typów oraz skrypt walidacyjny potwierdzający, że każdy kraj ma wpis w drinks/entertainment/outfits i zgodną liczbę pozycji.
- Bez zmian w wyglądzie karty poza nagłówkiem regionu.
