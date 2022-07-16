const inputElem = document.querySelector('.name-form__input');
const buttonElem = document.querySelector('.name-form__btn');
const avatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

buttonElem.addEventListener('click', buttonHandler);

function buttonHandler() {
  const userName = inputElem.value;
  // console.log(userName);
  request('https://api.github.com/users/' + userName);
}

function request(url) {
  fetch(url)
    .then(response => response.json())
    .then(result => renderData(result));
}

function renderData(userData) {
  console.log(userData);
  const { name, avatar_url, location } = userData;
  avatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location;
  // console.log(login, avatar_url, location);
}
