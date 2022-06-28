import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('shuold return null on empty array', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('shuold return null on string', () => {
  const result = getMinSquaredNumber('saddsadsa');
  expect(result).toEqual(null);
});

it('shuold return abs lowest el power 2', () => {
  const result = getMinSquaredNumber([1, -5, -8, 6, 0.9]);
  expect(result).toEqual(0.9 ** 2);
});
