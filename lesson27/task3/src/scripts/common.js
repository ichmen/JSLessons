export function clearList() {
  document.querySelectorAll('.list__item').forEach(elem => elem.remove());
}
export function setRandomId() {
  let id = Math.floor(Math.random() * 100);
  const idArray = tasks.map(({ id }) => id);
  while (idArray.includes(id)) {
    id = Math.floor(Math.random() * 100);
  }
  return id;
}

export function sortByDoneByDate(a, b) {
  if (a.done != b.done) {
    return a.done - b.done;
  } else {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    }
    return 0;
  }
}
export function checkBoxProcessor({ text, done, id }) {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = done;
  checkbox.classList.add('list__item-checkbox');
  checkbox.dataset.id = id;
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkbox, text);

  return listItemElem;
}
