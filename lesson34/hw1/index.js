const submitButton = document.querySelector('.submit-button');
const inputEmail = document.querySelector('input[name="email"]');
const inputName = document.querySelector('input[name="name"]');
const inputPassword = document.querySelector('input[name="password"]');
const form = document.querySelector('.login-form');
const baseUrl = 'https://62d56536d4406e523559e20d.mockapi.io/avi/v1/userLogin';

inputEmail.addEventListener('input', changeHandler);
inputName.addEventListener('input', changeHandler);
inputPassword.addEventListener('input', changeHandler);
submitButton.addEventListener('click', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  postData(Object.fromEntries(new FormData(form)));
}
function changeHandler(event) {
  if (form.reportValidity()) {
    submitButton.removeAttribute('disabled');
  } else {
    submitButton.setAttribute('disabled', true);
  }
  event.target.focus();
}
function postData(dataToPost) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToPost),
  })
    .then(res => res.json())
    .then(data => {
      form.reset();
      return data;
    })
    .then(data => alert(JSON.stringify(data)));
}
