export function clearList() {
  document.querySelector('.list').innerHTML = '';
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
  const textElem = document.createElement('span');
  if (done) {
    listItemElem.classList.add('list__item_done');
    textElem.classList.add('text__item_done');
  }
  const delButton = document.createElement('button');
  delButton.classList.add('delete-button');
  delButton.textContent = '+';
  textElem.textContent = text;
  listItemElem.append(checkbox, textElem, delButton);

  return listItemElem;
}
