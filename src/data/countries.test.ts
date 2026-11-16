import { describe, expect, test } from "bun:test";
import { countries } from "./countries";
import { drinks } from "./drinks";
import { entertainment } from "./entertainment";
import { figures } from "./figures";
import { outfits } from "./outfits";

describe("Podział Wielkiej Brytanii bez Walii", () => {
  for (const name of ["Anglia", "Szkocja", "Irlandia Północna"]) {
    test(`${name} ma osobny, kompletny wpis`, () => {
      const entries = countries.filter((country) => country.name === name);
      expect(entries).toHaveLength(1);
      const country = entries[0];
      if (!country) throw new Error(`Brak kraju: ${name}`);
      expect(country.region).toBe("Europa Zachodnia");
      expect(country.food).toHaveLength(4);
      expect(country.desserts).toHaveLength(4);
      expect(drinks[name]).toHaveLength(4);
      expect(outfits[name]?.woman).toHaveLength(4);
      expect(outfits[name]?.man).toHaveLength(4);
      expect(figures[name]).toHaveLength(3);
      for (const items of [country.traditions, country.stereotypes, country.movies, country.music, entertainment[name]]) {
        expect(items).toHaveLength(3);
        expect(items.every((item) => item.trim().length > 0)).toBe(true);
      }
    });
  }

  for (const name of ["Wielka Brytania", "Walia"]) {
    test(`${name} nie występuje w losowaniu ani danych dodatkowych`, () => {
      expect(countries.some((country) => country.name === name)).toBe(false);
      for (const data of [drinks, entertainment, figures, outfits]) {
        expect(Object.hasOwn(data, name)).toBe(false);
      }
    });
  }

  test("Irlandia pozostaje oddzielnym krajem", () => {
    expect(countries.filter((country) => country.name === "Irlandia")).toHaveLength(1);
  });
});