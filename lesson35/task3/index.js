import { request, requestRepos } from './gateWay.js';
import { renderData, renderRepos } from './render.js';

const inputElem = document.querySelector('.name-form__input');
const buttonElem = document.querySelector('.name-form__btn');
const spinner = document.querySelector('.spinner');
const baseUrl = 'https://api.github.com/users/';
const defaultUser = {
  name: '',
  avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  location: '',
};
renderData(defaultUser);
buttonElem.addEventListener('click', buttonHandler);

function buttonHandler() {
  spinner.classList.remove('spinner_hidden');
  request(baseUrl + inputElem.value)
    .then(data => {
      renderData(data);
      return data.repos_url;
    })
    .then(url => requestRepos(url))
    .then(data => {
      renderRepos(data);
      spinner.classList.add('spinner_hidden');
    })
    .catch(() => {
      spinner.classList.add('spinner_hidden');
      alert('Failed to load data');
    });
}
