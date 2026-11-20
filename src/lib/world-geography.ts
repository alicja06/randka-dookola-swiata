import {feature} from 'topojson-client';
import type {Feature, Geometry} from 'geojson';
import type {Topology, GeometryCollection} from 'topojson-specification';

export type CountryFeature = Feature<Geometry, {name: string}>;
let pending: Promise<CountryFeature[]> | undefined;
export function loadWorldGeography() {
  pending ??= import('world-atlas/countries-50m.json').then(module => {
    const topology = module.default as unknown as Topology<{countries: GeometryCollection<{name: string}>}>;
    return feature(topology, topology.objects.countries).features.filter(country => country.properties.name !== 'Antarctica');
  }).catch(error => { pending = undefined; throw error; });
  return pending;
}