it("try 17=17", () => expect(17).toEqual(17));
it("try 17!=18", () => expect(17).not.toEqual(18));
const getEvenNumbers = (arr) => arr.filter((el) => !(el % 2));

it("should return even numbers", () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([2, 4]);
});
