'use strict';

/**
 * @param {string} userId
 * @param {function} callback
 * @return {undefined}
 */
const requestUserData = (userId, callback) => {
  // put your code here
  const user = { userId: userId, email: userId + '@example.com' };
  const timeout = () => Math.round(Math.random() * 2000) + 1000;

  setTimeout(() => {
    userId === 'broken'
      ? callback.call(null, 'Failed to load user data')
      : callback.call(null, user);
  }, timeout());
};

requestUserData('das', func);

function func(error) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(this.userId, this.email);
}
