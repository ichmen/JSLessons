function bind(func, context) {
  // console.log([...arguments].slice(2));

  // return () => func.apply(context, [...arguments].slice(2), (args = ''));
  return (...num) => {
    // console.log(num);
    return func.apply(context, [...arguments].slice(2).concat([...num]));
  };
}

// console.log(arguments);

const user = {
  name: 'Bob',
  sayHi() {
    console.log(this.name);
  },
};

const user2 = {
  name: 'Tom',
};
let a = bind(sayHi, { name: 'Bob' }, 22, 33);

//a = bind(sayHi, { name: 'Tom' });
function sayHi(num1, num2, num3) {
  console.log(this.name, num1, num2, num3);
}
// let binded = sayHi;

// this[func] = this[func] ? this[func] : context;
// console.log($func.field);
// console.log($func.field ? true : false);
// $func.field = $func.field ? $func.field : context;
// a() =>'Bob';
// a()=>'Bob';

a.bind;
// const con = context;
// console.log(con);
// console.log(con);
// callee.field = 'context';
// let workContext = context;
