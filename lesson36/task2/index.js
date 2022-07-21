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

async function buttonHandler() {
  spinner.classList.remove('spinner_hidden');
  try {
    const data = await request(baseUrl + inputElem.value);
    renderData(data);
    renderRepos(await requestRepos(data.repos_url));
  } catch {
    alert('Failed to load data');
  } finally {
    spinner.classList.add('spinner_hidden');
    inputElem.value = '';
  }
}
