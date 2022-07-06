'use strict';

export const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  //   console.log(listElem);
  tasksList.forEach(({ text, done }) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list__item');
    const checkBoxItem = document.createElement('input');
    checkBoxItem.setAttribute('type', 'checkbox');
    checkBoxItem.checked = done;
    checkBoxItem.classList.add('list__item-checkbox');
    listItem.append(checkBoxItem, text);
    if (done) {
      listItem.classList.add('list__item_done');
    }

    console.log(listItem);
    listElem.append(listItem);
  });
};

renderTasks(tasks);
