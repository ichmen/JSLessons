'use strict';
function saveFuncCalls(func) {
  // console.log('This:', this);
  const callsArray = [];
  return function sayHi(...num) {
    // const callsHistory = [];
    callsArray.push(num);
    //
    sayHi.callsHistory = callsArray;
    // console.log(callsArray);
    console.log('Arguments:', arguments);
    console.log('This:', this);
    return func.apply(this, [...num]);
  };
}

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const sayHiWithMemory = saveFuncCalls(user.sayHi);
const sayHiWithMemoryBinded = sayHiWithMemory.bind({ name: 'Tom' });
console.log(sayHiWithMemoryBinded());
