import { renderTasks } from './render.js';
import { setTask, getTasks, changeTask, deleteTask } from './gateWay.js';

const taskText = document.querySelector('.task-input');

export function buttonProcessor() {
  if (!taskText.value) {
    return;
  }
  setTask({
    text: taskText.value,
    done: false,
    date: JSON.parse(JSON.stringify(new Date())),
  }).then(() => getTasks().then(res => renderTasks(res)));
}

export function listClickHandler(event) {
  if (event.target.classList.contains('list__item-checkbox')) {
    const checkboxItem = event.target;
    checkboxStatusChange(checkboxItem)
      .then(() => getTasks())
      .then(res => renderTasks(res));
  } else if (event.target.classList.contains('delete-button')) {
    deleteTask(event.target.previousSibling.previousSibling.dataset.id)
      .then(() => getTasks())
      .then(res => renderTasks(res));
  }
}

function checkboxStatusChange(elem) {
  const taskId = elem.dataset.id;
  return getTasks().then(tasks => {
    const task = tasks.find(el => el.id == taskId);
    task.done = !task.done;
    return changeTask(task);
  });
}
export function delButtonHandler(event) {
  console.log(event.parant());
}
