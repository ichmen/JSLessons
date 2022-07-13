function compose(...func) {
  return function (num) {
    return func.reduce((acc, func) => func(acc), num);
  };
}

const add2 = value => value + 2;
const square = value => value * value;
const half = value => value / 2;
const superFunc = compose(add2, square, half);
let a = superFunc(2);
