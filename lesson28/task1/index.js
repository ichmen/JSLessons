function calc(value) {
  let initValue = value;
  const calculacor = {
    add(number) {
      initValue += number;
      return calculacor;
    },
    substruct(number) {
      initValue -= number;
      return calculacor;
    },
    mult(number) {
      initValue *= number;
      return calculacor;
    },
    div(number) {
      initValue /= number;
      return calculacor;
    },
    result() {
      return initValue;
    },
  };
  return calculacor;
}
