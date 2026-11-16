import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { countries } from "./countries";
import { drinks } from "./drinks";
import { entertainment } from "./entertainment";
import { figures } from "./figures";
import { outfits } from "./outfits";

describe("Podział Wielkiej Brytanii bez Walii", () => {
  for (const name of ["Anglia", "Szkocja"]) {
    test(`${name} ma osobny, kompletny wpis`, () => {
      const entries = countries.filter((country) => country.name === name);
      assert.equal(entries.length, 1);
      const country = entries[0];
      if (!country) throw new Error(`Brak kraju: ${name}`);
      assert.equal(country.region, "Europa Zachodnia");
      assert.equal(country.food.length, 4);
      assert.equal(country.desserts.length, 4);
      assert.equal(drinks[name]?.length, 4);
      assert.equal(outfits[name]?.woman.length, 4);
      assert.equal(outfits[name]?.man.length, 4);
      assert.equal(figures[name]?.length, 3);
      for (const items of [country.traditions, country.stereotypes, country.movies, country.music, entertainment[name]]) {
        assert.equal(items.length, 3);
        assert.ok(items.every((item) => item.trim().length > 0));
      }
    });
  }

  for (const name of ["Wielka Brytania", "Walia"]) {
    test(`${name} nie występuje w losowaniu ani danych dodatkowych`, () => {
      assert.equal(countries.some((country) => country.name === name), false);
      for (const data of [drinks, entertainment, figures, outfits]) {
        assert.equal(Object.hasOwn(data, name), false);
      }
    });
  }

  test("Irlandia pozostaje oddzielnym krajem", () => {
    assert.equal(countries.filter((country) => country.name === "Irlandia").length, 1);
  });
});