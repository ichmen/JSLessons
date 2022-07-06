export function setTitle(text) {
  const searchElem = document.querySelector('.title');
  console.dir(searchElem);
  searchElem.textContent = String(text);
  // document.querySelector('.title').textContent = String(text);
}
setTitle('AAAAAA');

// console.log(getTitle());
// console.log(getDescription());
// console.log(getPlans());
// console.log(getGoal());
// export { setTitle };
