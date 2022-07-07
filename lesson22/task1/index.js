const clearField = () => {
  document.querySelector('.events-list').innerHTML = '';
};
clearField();
const selectedDiv = document.querySelector('.rect_div');
const selectedP = document.querySelector('.rect_p');
const selectedSpan = document.querySelector('.rect_span');
const clearButton = document.querySelector('.clear-btn');
const attachButton = document.querySelector('.attach-handlers-btn');
const removeButton = document.querySelector('.remove-handlers-btn');
attachListen();

const eventAdd = (type, color) => {
  const eventsField = document.querySelector('.events-list');
  eventsField.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${type}</span>`;
};
// eventAdd('das', 'green');
function attachListen() {
  selectedDiv.addEventListener('click', divClick);
  selectedP.addEventListener('click', pClick);
  selectedSpan.addEventListener('click', spanClick);
  selectedDiv.addEventListener('click', divCapturedClick, true);
  selectedP.addEventListener('click', pCapturedClick, true);
  selectedSpan.addEventListener('click', spanCapturedClick, true);
}

clearButton.addEventListener('click', clearField);
attachButton.addEventListener('click', attachListen);
removeButton.addEventListener('click', clearListen);

function clearListen() {
  selectedDiv.removeEventListener('click', divClick);
  selectedP.removeEventListener('click', pClick);
  selectedSpan.removeEventListener('click', spanClick);
  selectedDiv.removeEventListener('click', divCapturedClick, true);
  selectedP.removeEventListener('click', pCapturedClick, true);
  selectedSpan.removeEventListener('click', spanCapturedClick, true);
}

function divClick(event) {
  // console.log(event);
  eventAdd('div', 'green');
  // event.stopPropagation();
}
function divCapturedClick(event) {
  // console.log(event);
  eventAdd('div', 'grey');
  // event.stopPropagation();
}
function pClick(event) {
  eventAdd('p', 'green');
  // event.stopPropagation();
}
function pCapturedClick(event) {
  eventAdd('p', 'grey');
  // event.stopPropagation();
}
function spanClick(event) {
  // console.log(event);
  eventAdd('span', 'green');
  // event.stopPropagation();
}
function spanCapturedClick(event) {
  // console.log(event);
  eventAdd('span', 'grey');
  // event.stopPropagation();
}
