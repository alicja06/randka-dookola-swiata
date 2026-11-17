import {test} from 'node:test';
import assert from 'node:assert/strict';
import {validateMemory} from './album-validation';
test('rating accepts 1–5 or no rating and rejects values outside scale', () => {
  const input = {country:'Włochy', date_on:'2026-11-16'};
  for (const rating of [1,2,3,4,5,null]) assert.equal(validateMemory({...input,rating}).rating,rating);
  for (const rating of [0,6,1.5]) assert.throws(() => validateMemory({...input,rating}));
});