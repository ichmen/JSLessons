'use strict';
/**
 * @param {string[]} users
 * @return {promise}
 */

const getUsersBlogs = async users => {
  const baseUrl = 'https://api.github.com/users/';
  const promList = users.map(user =>
    fetch(baseUrl + user)
      .then(response => response.json())
      .then(data => data.blog),
  );

  return await Promise.all(promList);
};
getUsersBlogs(['google', 'facebook', 'reactjs']).then(linksList => console.log(linksList));
