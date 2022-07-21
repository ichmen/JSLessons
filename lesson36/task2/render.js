const avatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
const repoList = document.querySelector('.repo-list');

export function renderData(userData) {
  repoList.innerHTML = '';
  const { name, avatar_url, location, repos_url } = userData;
  // console.log(userData);
  //   requestRepos(repos_url);
  avatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
}
export function renderRepos(data) {
  const repoItems = data.map(({ name }) => {
    const listItem = document.createElement('li');
    listItem.classList.add('repo-list__item');
    listItem.textContent = name;
    return listItem;
  });
  repoList.append(...repoItems);
}
