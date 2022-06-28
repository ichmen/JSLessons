import sum, { getSquaredArray, getOddNumbers } from './calculator.js';
it('shuld return sum', () => {
  const result = sum(2, 3);
  expect(result).toEqual(5);
});
it('shuld return squares', () => {
  const result = getSquaredArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});
it('should return odds from list', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});
