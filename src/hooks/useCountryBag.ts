import { useCallback, useRef } from "react";

const STORAGE_KEY = "randka-bag-v1";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function readBag(valid: Set<string>): string[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return null;
    return parsed.filter((n): n is string => typeof n === "string" && valid.has(n));
  } catch {
    return null;
  }
}

function writeBag(bag: string[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(bag));
  } catch {
    /* pamięć niedostępna – działamy tylko w sesji */
  }
}

/**
 * "Worek losów": zwraca kolejne nazwy bez powtórek,
 * a po wyczerpaniu listy tasuje wszystko od nowa.
 * Stan trzymany jest w localStorage danej przeglądarki.
 */
export function useCountryBag(names: string[]) {
  const memoryBag = useRef<string[] | null>(null);

  const next = useCallback((): string => {
    const valid = new Set(names);
    let bag =
      (typeof window !== "undefined" ? readBag(valid) : null) ??
      memoryBag.current ??
      null;

    if (!bag || bag.length === 0) {
      bag = shuffle(names);
    }

    const picked = bag[0];
    const rest = bag.slice(1);
    memoryBag.current = rest;
    if (typeof window !== "undefined") writeBag(rest);
    return picked;
  }, [names]);

  return { next };
}
