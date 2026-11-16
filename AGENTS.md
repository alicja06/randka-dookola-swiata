# Project rules

- Keep country-data regression tests beside the data modules using `node:test` and run them with `bun test`; this validates destination coverage without introducing a test dependency or additional type declarations.