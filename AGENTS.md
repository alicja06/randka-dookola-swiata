# Project rules

- Keep country-data regression tests beside the data modules using `node:test` and run them with `bun test`; this validates destination coverage without introducing a test dependency or additional type declarations.
- Keep the shared album on its own public, session-aware page with one root session subscriber; country drawing stays usable without sign-in.
- Use generated browser clients with RLS for album data and private storage with expiring photo URLs; membership is established only through atomic database functions.