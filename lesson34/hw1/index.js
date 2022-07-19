const submitButton = document.querySelector('.submit-button');
const inputEmail = document.querySelector('input[name="email"]');
const inputName = document.querySelector('input[name="name"]');
const inputPassword = document.querySelector('input[name="password"]');
const form = document.querySelector('.login-form');
const baseUrl = 'https://62d56536d4406e523559e20d.mockapi.io/avi/v1/userLogin';

inputEmail.addEventListener('change', changeHandler);
inputName.addEventListener('change', changeHandler);
inputPassword.addEventListener('change', changeHandler);
submitButton.addEventListener('click', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  postData(Object.fromEntries(new FormData(form)));
}

function changeHandler(event) {
  if (inputEmail.reportValidity() && inputName.reportValidity() && inputPassword.reportValidity()) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', true);
  }
}
function postData(dataToPost) {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToPost),
  })
    .then(res => res.json())
    .then(data => alert(JSON.stringify(data)));
}
