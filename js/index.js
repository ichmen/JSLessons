function getRandomNumbers(num, from, to) {
  if (from > to || parseInt(to) - parseInt(from) < 1) {
    return null;
  }
  const min = Math.ceil(from);
  const max = Math.floor(to);
  return Array(num)
    .fill()
    .map(() => Math.round(Math.random() * (max - min) + min));
}
getRandomNumbers(5, 1.4, 3.22);
getRandomNumbers(5, 1.4, 1.22);
getRandomNumbers(1, 1.4, 5.22);
getRandomNumbers(1, 0.9, 1.1);
getRandomNumbers(0, 0.9, 1.1);
