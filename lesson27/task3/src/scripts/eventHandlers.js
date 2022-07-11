import { renderTasks } from './render.js';
import { getStorage } from './storage.js';
import { setRandomId } from './common.js';

const taskText = document.querySelector('.task-input');
export function buttonProcessor(event) {
  event.preventDefault();
  if (!taskText.value) {
    return;
  }
  tasks.push({
    text: taskText.value,
    done: false,
    id: setRandomId(),
    date: JSON.parse(JSON.stringify(new Date())),
  });
  renderTasks(tasks);
  localStorage.setItem('tasksList', JSON.stringify(tasks));
}

export function storageChange(event) {
  if (event.key == 'tasksList') {
    tasks = getStorage();
    renderTasks(tasks);
  }
}

export function listClickHandler(event) {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  const checkboxItem = event.target;
  checkboxStatusChange(checkboxItem);
  localStorage.setItem('tasksList', JSON.stringify(tasks));
  renderTasks(tasks);
}

function checkboxStatusChange(elem) {
  let listIndex;
  tasks.forEach(({ id }, index) => {
    if (id === Number(elem.dataset.id)) {
      listIndex = index;
    }
  });
  tasks[listIndex].done = tasks[listIndex].done ? false : true;
  tasks[listIndex].date = JSON.parse(JSON.stringify(new Date()));
}
