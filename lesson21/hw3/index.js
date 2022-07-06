function getTitle() {
  const searchElem = document.querySelector('.title');
  return searchElem.textContent;
}
function getDescription() {
  const searchElem = document.querySelector('.about');
  return searchElem.innerText;
}
function getPlans() {
  const searchElem = document.querySelector('.plans');
  return searchElem.innerHTML;
}

function getGoal() {
  const searchElem = document.querySelector('.goal');
  return searchElem.outerHTML;
}

// console.log(getTitle());
// console.log(getDescription());
// console.log(getPlans());
// console.log(getGoal());
export { getTitle, getDescription, getPlans, getGoal };
