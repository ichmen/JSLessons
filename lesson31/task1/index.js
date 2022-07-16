'use strict';

/**
 * @param {string} userId
 * @return {promise}
 */
const requestUserData = userId => {
  const p = new Promise((resolver, rejector) => {
    if (userId === 'broken') {
      setTimeout(() => {
        rejector(new Error('User not found'));
      }, 500);
    }

    setTimeout(() => {
      resolver({ name: 'John', age: 17, userId, email: userId + '@example.com' });
    }, 1000);
  });
  return p;
};

requestUserData('broken').catch(data => console.log(data));
requestUserData('broken')
  .then(data => console.log('data'))
  .catch(() => 2);
