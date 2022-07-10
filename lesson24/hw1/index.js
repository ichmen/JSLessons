function getDiff(startDate, endDate) {
  let diff = Math.abs(startDate - endDate);
  const day = 24 * 60 * 60 * 1000;
  const hour = day / 24;
  const min = hour / 60;
  const sec = min / 60;

  const days = (diff - (diff % day)) / day;
  diff -= days * day;
  const hours = (diff - (diff % hour)) / hour;
  diff -= hours * hour;
  const mins = (diff - (diff % min)) / min;
  diff -= mins * min;
  const secs = (diff - (diff % sec)) / sec;

  return `${days}d ${hours}h ${mins}m ${secs}s`;
}

let a = new Date();
let b = new Date(2022, 3);
