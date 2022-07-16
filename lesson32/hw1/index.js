/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

const makePromise = num => {
  // put you code here
  // console.log(arguments);
  const p = new Promise(resolver => {
    resolver(num);
  });
  return p;
};

/*
 * пример использования
 */
makePromise(17).then(number => {
  console.log(number); // 17
});
