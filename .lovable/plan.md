## Co poprawiamy

### 1. Treść i SEO
- Opis strony (meta description) wciąż mówi „jeden z 50 krajów”, a w bazie jest ich **113**. Zmiana na opis bez zmyślonej liczby, np. „Wylosuj kraj i zaplanuj randkę inspirowaną jego kulturą: tradycje, jedzenie, desery, napoje, filmy i muzyka”.
- Dodanie brakujących znaczników podglądu linku: `og:title`, `og:description`, `og:type`, `twitter:card`, `og:url` + `canonical` na stronie głównej — dziś po wysłaniu linku np. na Messengerze podgląd jest ubogi.
- Dodanie JSON-LD (WebSite) w warstwie głównej — pomaga wyszukiwarkom rozpoznać stronę.
- Porządki w danych: pole „pomysł na randkę” (`dateIdea`) zostało w każdym z 113 krajów, ale nie jest już nigdzie pokazywane (zastąpiła je Rozrywka). Usuwam je z typu i z danych, żeby plik był czystszy i nie mylił przy kolejnych edycjach.

### 2. Zapis JPG na telefonie
Obecnie na telefonie karta układa się w jedną kolumnę, więc plik wychodzi bardzo długi i wąski. Poprawka: eksport zawsze w układzie „desktopowym”.
- Karta dostanie tryb eksportu: sekcje Jedzenie/Desery/Napoje w 3 kolumnach, Ubiór oraz Tradycje/Stereotypy/Filmy/Muzyka w 2 kolumnach — niezależnie od szerokości ekranu.
- Podczas zapisu karta jest renderowana poza ekranem na stałej szerokości ok. 1000 px, zapisywana, a potem usuwana — użytkownik nic nie widzi poza napisem „Zapisywanie...”.
- Efekt: na telefonie i na desktopie plik JPG wygląda identycznie — czytelny, proporcjonalny obrazek zamiast długiego paska.

### Szczegóły techniczne
- `src/routes/index.tsx`: rozszerzone `head()` (meta + links + JSON-LD), eksport przez ukryty kontener o `width: 1000px` przekazany do `toJpeg` z `width/height` i `pixelRatio: 2`.
- `src/components/CountryCard.tsx`: opcjonalny prop `forExport?: boolean` przełączający `md:grid-cols-*` na stałe `grid-cols-*`; brak zmian w danych i logice losowania.
- `src/data/countries.ts`: usunięcie pola `dateIdea` z typu `Country` i ze wszystkich wpisów (skryptem, bez ruszania pozostałych treści), potem sprawdzenie typów.

Losowanie, lista krajów i wygląd strony pozostają bez zmian.
