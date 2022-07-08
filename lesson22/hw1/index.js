const workElem = Array.from(document.querySelectorAll('.pagination__page'));
workElem.forEach(el => {
  el.addEventListener('click', handClick);
});

function handClick(event) {
  console.log(event.target.dataset.pageNumber);
}
