function delay() {
  const [delay, callback, context, ...args] = [...arguments];
  //   console.log(...args);
  setTimeout(() => {
    callback.call(context, ...args);
  }, delay);
}
const obj = { meat: 22 };

delay(2000, testFunc, obj, 5, 6, 7);

function testFunc(num) {
  console.log(this.meat);
  console.log(num);
}
