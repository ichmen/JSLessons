function maxFibonacci(num) {
  let fibonacci = 0;
  for (let index = 0; index <= num; index += 1) {
    fibonacci = fibb(index);
    if (fibonacci > num) {
      return fibb(index - 1);
    }
  }
  return fibonacci;
  function fibb(n) {
    let retVal = 0;
    if (n != 0) {
      if (n === 1) {
        retVal = 1;
      } else {
        retVal = fibb(n - 1) + fibb(n - 2);
      }
    }
    return retVal;
  }
}
