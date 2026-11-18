import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {countries} from './countries';
import {geoNames} from './geo-names';
test('every country can be shown on the map', () => {
  for (const c of countries) assert.ok(geoNames[c.name], `missing map name for ${c.name}`);
});
test('map names exist in the world outlines', () => {
  const t = JSON.parse(readFileSync(new URL('../../node_modules/world-atlas/countries-50m.json', import.meta.url), 'utf8'));
  const names = new Set(t.objects.countries.geometries.map((g: {properties:{name:string}}) => g.properties.name));
  for (const n of Object.values(geoNames)) assert.ok(names.has(n), n);
});
