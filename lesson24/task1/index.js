function dayOfWeek(date, days) {
  return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'][(new Date(date).getDay() + days) % 7];
}
let t = new Date();
