export function setButton(buttonText) {
  const searchElem = document.querySelector('body');
  searchElem.innerHTML = `<button>${buttonText}</button>`;
  // searchElem.textContent = `<button>${buttonText}</button>`;
  // console.dir(searchElem);
  // searchElem.textContent = String(text);
  // document.querySelector('.title').textContent = String(text);
}
setButton('AAAAAA');

// console.log(getTitle());
// console.log(getDescription());
// console.log(getPlans());
// console.log(getGoal());
// export { setTitle };
