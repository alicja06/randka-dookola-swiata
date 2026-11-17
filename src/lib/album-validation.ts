export function validateMemory(input: {country: string; date_on: string; rating: number | null}) {
  if (!input.country.trim()) throw new Error('Wybierz kraj.');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.date_on) || Number.isNaN(Date.parse(input.date_on))) throw new Error('Podaj datę randki.');
  if (input.rating !== null && (!Number.isInteger(input.rating) || input.rating < 1 || input.rating > 5)) throw new Error('Wybierz ocenę od 1 do 5.');
  return input;
}