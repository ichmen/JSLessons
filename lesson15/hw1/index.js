export const createCalculator = () => {
  // put your code here
  let memory = 0;
  const add = num => {
    memory += num;
  };
  const decrease = num => {
    memory -= num;
  };
  const reset = () => {
    memory = 0;
  };
  const getMemo = () => memory;
  return { add, decrease, reset, getMemo };
};
