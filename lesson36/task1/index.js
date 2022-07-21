'use strict';

// import { async } from 'regenerator-runtime';

const fetchUser = async userId => {
  try {
    const response = await fetch('https://api.github.com/users/' + userId);
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    throw new Error('Failed to get user data');
  }
  // put your code here
};
fetchUser('fqbasook').catch(e => console.log(e));
