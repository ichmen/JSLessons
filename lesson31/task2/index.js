function asyncCalculator(numbr) {
  const p = new Promise((resolver, rejector) => {
    setTimeout(() => {
      console.log(`Initial value: ${numbr}`);
      resolver(numbr);
    }, 500);
  })
    .then(numbr => {
      const p = new Promise(resolver => {
        setTimeout(() => {
          console.log(`Squared value: ${numbr ** 2}`);
          resolver(numbr ** 2);
        }, 500);
      });
      return p;
    })
    .then(numbr => {
      console.log(`Doubled value: ${numbr * 2}`);
      return numbr * 2;
    });
  return p;
}

const a = asyncCalculator(4);
a.then(res => console.log(res));
