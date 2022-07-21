export function request(url) {
  return fetch(url).then(response => response.json());
  // .then(result => renderData(result));
}

export function requestRepos(url) {
  return fetch(url).then(response => response.json());
}
