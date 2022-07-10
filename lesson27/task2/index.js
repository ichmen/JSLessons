const page = document.querySelector('.container');
const counter = document.querySelector('.counter');
page.addEventListener('click', buttonClick);
function buttonClick(event) {
  if (!event.target.classList.contains('btn')) {
    // console.log('not button');
    return;
  }
  // console.log(typeof counter.textContent);
  const newValue =
    event.target.textContent === '+'
      ? Number(counter.textContent) + 1
      : Number(counter.textContent) - 1;
  counter.textContent = newValue;
  localStorage.setItem('counterValue', newValue);
}

window.addEventListener('storage', onStorageChange);

function onStorageChange(event) {
  // console.log(event);
  counter.textContent = event.newValue;
}

document.addEventListener('DOMContentLoaded', onContentLoaded);

function onContentLoaded() {
  // console.log('hi');
  counter.textContent = localStorage.getItem('counterValue') || 0;
}
