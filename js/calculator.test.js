import sum, { calc } from './calculator.js';
it('shuld return sum', () => {
  const result = calc('2 + 3');
  expect(result).toEqual('2 + 3 = 5');
});
it('shuld return dif', () => {
  const result = calc('2 - 3');
  expect(result).toEqual('2 - 3 = -1');
});
it('shuld return mult', () => {
  const result = calc('2 * 3');
  expect(result).toEqual('2 * 3 = 6');
});
it('shuld return div', () => {
  const result = calc('3 / 2');
  expect(result).toEqual('3 / 2 = 1.5');
});
it('shuld return null', () => {
  const result = calc(23);
  expect(result).toEqual(null);
});
