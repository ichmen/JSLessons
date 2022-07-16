function asyncSum(...AsyncNumbers) {
  return Promise.all(AsyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => console.log("Can't calculate"));
}

function getSum(numbers) {
  return numbers.reduce((acc, el) => (isNaN(el) ? acc : Number(el) + acc), 0);
}

const asyncNum1 = new Promise(resolver => {
  setTimeout(() => {
    resolver('17');
  }, 3500);
});

const asyncNum2 = new Promise(resolver => {
  setTimeout(() => {
    resolver(25);
  }, 400);
});

const asyncNum3 = new Promise(resolver => {
  setTimeout(() => {
    resolver(10);
  }, 1500);
});

const a = asyncSum(asyncNum1, Promise.reject(new Error('error')), asyncNum3);
a.then(num => console.log(num));
