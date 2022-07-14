'use strict';

/**
 * @param {number} count
 * @param {number} period
 * @return {undefined}
 */
const pinger = (count, period) => {
  // put your code here
  console.log('Ping');
  const interval = setInterval(() => {
    console.log('Ping');
  }, period);

  setTimeout(() => {
    clearInterval(interval);
  }, (count - 1) * period);
};

// examples
pinger(5, 100); // makes 5 writes with 100 ms interval
pinger(7, 150); // makes 7 writes with 1500 ms interval
