# Naprawa logowania w zainstalowanej aplikacji

## Najbardziej prawdopodobna przyczyna
Zainstalowana aplikacja na telefonie otwiera opublikowaną wersję strony. Album i logowanie zostały dodane po ostatniej publikacji, więc w aplikacji na telefonie ich jeszcze nie ma albo działają w starej wersji. Kod logowania sam w sobie wygląda poprawnie (adres powrotu budowany jest z bieżącej strony).

## Kroki
1. Opublikować aktualną wersję aplikacji.
2. Sprawdzić na opublikowanym adresie logowanie e-mailem i przez Google (w przeglądarce telefonu i w zainstalowanej aplikacji).
3. Jeśli logowanie przez Google nadal wraca do przeglądarki zamiast do aplikacji: ustawić powrót po logowaniu na stronę główną aplikacji i po zalogowaniu automatycznie przenosić do albumu.
4. Po publikacji usunąć ikonę z telefonu i zainstalować aplikację ponownie, jeśli nadal widać starą wersję.

## Szczegóły techniczne
- Weryfikacja: ustawienia adresów logowania (Site URL / Redirect URLs) dla opublikowanej domeny.
- Ewentualna zmiana: `redirect_uri` w `AlbumAuth.tsx` na `window.location.origin`, zapamiętanie celu `/album` w sessionStorage.
