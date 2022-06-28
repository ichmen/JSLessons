export const getMinSquaredNumber = arr =>
  Array.isArray(arr) && arr.length ? Math.min(...arr.map(el => Math.abs(el))) ** 2 : null;
