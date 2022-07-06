function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}
// const name = 'Terry';
const user = {
  name: 'Bob',
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
};
const user2 = {
  name: 'Tom',
};

defer(user.sayHi, 3000).call(user2);
