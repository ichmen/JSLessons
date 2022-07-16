function delay(number) {
  const p = new Promise(resolver => {
    setTimeout(() => {
      resolver();
    }, number);
  });
  return p;
}
delay(3000).then(() => console.log('das'));
