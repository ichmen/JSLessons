const tasks = [
  { text: 'Buy milk', done: false, id: 1, date: new Date() },
  { text: 'Pick up Tom from airport', done: false, id: 2, date: new Date() },
  { text: 'Visit party', done: false, id: 3, date: new Date() },
  { text: 'Visit doctor', done: true, id: 4, date: new Date() },
  { text: 'Buy meat', done: true, id: 5, date: new Date() },
];

const listElem = document.querySelector('.list');
const taskText = document.querySelector('.task-input');
const createTaskButton = document.querySelector('.create-task-btn');

const renderTasks = tasksList => {
  clearList();
  const tasksElems = tasksList
    .sort((a, b) => {
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
    })
    .map(({ text, done, id }) => {
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
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

createTaskButton.addEventListener('click', buttonProcessor);
listElem.addEventListener('click', listClickHandler);

function listClickHandler(event) {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  const checkboxItem = event.target;
  checkboxStatusChange(checkboxItem);
  renderTasks(tasks);
}

function checkboxStatusChange(elem) {
  const itemId = Number(elem.dataset.id);
  const listIndex = tasks.reduce((acc, { id }, index) => {
    return id == itemId && acc == undefined ? index : acc;
  }, undefined);
  tasks[listIndex].done = tasks[listIndex].done ? false : true;
  tasks[listIndex].date = new Date();
}

function buttonProcessor(event) {
  event.preventDefault();
  if (!taskText.value) {
    return;
  }
  tasks.push({ text: taskText.value, done: false, id: setRandomId(), date: new Date() });
  renderTasks(tasks);
  console.log(taskText.value);
}

function setRandomId() {
  let id = Math.floor(Math.random() * 100);
  const idArray = tasks.map(({ id }) => id);
  while (idArray.includes(id)) {
    id = Math.floor(Math.random() * 100);
  }
  return id;
}

function clearList() {
  document.querySelectorAll('.list__item').forEach(elem => elem.remove());
}

// put your code here
