# Szybsze ładowanie albumu na telefonie

## Co spowalnia
- Okładki i miniatury w galerii to pełne zdjęcia (do 1920 px, kilkaset KB każde) — telefon pobiera je w całości, nawet gdy wyświetla mały kafelek.
- Przy każdym wejściu do albumu linki do zdjęć są generowane od nowa, więc telefon nie może skorzystać z zapamiętanych zdjęć i pobiera je ponownie.
- Linki są tworzone od razu dla wszystkich zdjęć, choć na liście widać tylko okładki.

## Co zrobię
1. **Miniatury przy zapisie** — oprócz zdjęcia (1920 px) zapisuję małą wersję (~480 px, ok. 30–50 KB). Lista i galeria pokazują miniatury, pełne zdjęcie ładuje się dopiero po kliknięciu.
2. **Zapamiętywanie zdjęć** — linki ważne dłużej i przechowywane na urządzeniu, żeby ponowne wejście korzystało z już pobranych zdjęć.
3. **Najpierw okładki** — przy otwarciu albumu pobierane są tylko okładki; reszta zdjęć dopiero po otwarciu danego wspomnienia. Okładki niżej na stronie ładują się w trakcie przewijania.
4. **Płynny wygląd** — podczas ładowania widać delikatne tło w miejscu zdjęcia zamiast pustego miejsca.
5. **Istniejące zdjęcia** — dla już dodanych zdjęć miniatura zostanie utworzona automatycznie przy pierwszym wyświetleniu albumu (jednorazowo).

## Szczegóły techniczne
- Migracja: kolumna `thumb_path text` w `memory_photos` (+ GRANT UPDATE).
- `compress()` z parametrem rozmiaru; upload pliku `…_thumb.jpg` (480 px, JPEG 0.75) równolegle.
- `loadAlbum()` podpisuje tylko `thumb_path` okładek; pełne URL-e i miniatury galerii na żądanie (`createSignedUrls` przy otwarciu dialogu).
- Cache podpisanych URL-i w `sessionStorage`/pamięci z TTL (signed URL 24h), dzięki czemu URL jest stabilny i przeglądarka używa HTTP cache.
- `<img loading="lazy" decoding="async">`, skeleton `bg-muted`, `removePhoto`/`removeMemory` usuwają też miniatury.
- Backfill: brak `thumb_path` → klient pobiera oryginał, generuje miniaturę, uploaduje i zapisuje ścieżkę.
