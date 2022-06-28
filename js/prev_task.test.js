it('should return null on string', () => {
  const result = reverseArray(25);
  expect(result).toEqual(null);
});
it('should return array', () => {
  const result = reverseArray([1, 2, 3, 4]);
  expect(result).toEqual([4, 3, 2, 1]);
});
it('should return array', () => {
  const result = reverseArray([1, 2, 4, 3]);
  expect(result).toEqual([3, 4, 2, 1]);
});

it('should return array', () => {
  const result = reverseArray([1, 2, 4, 3]);
  expect(result).toEqual([3, 4, 2, 1]);
});

it('should return -1', () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)).toEqual(-1);
});

it('should return 1300', () => {
  expect(withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'Ann', 100)).toEqual(1300);
});

it('should return 1300', () => {
  let i = [1400, 87, -6];
  expect(withdraw(['Ann', 'John', 'User'], i, 'John', 37).toEqual(50));
});

it('should return empty obj', () => {
  expect(getAdult({}).toEqual({}));
});

it('should return empty obj', () => {
  expect(getAdult({ 'John Doe': 16, Tom: 17, Bob: 15 }).toEqual({}));
});
it('should return not empty obj', () => {
  expect(getAdult({ 'John Doe': 18, Tom: 19, Bob: 15 }).toEqual({ 'John Doe': 18, Tom: 19 }));
});
