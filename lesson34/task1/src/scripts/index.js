import { renderTasks } from './render.js';
import { buttonProcessor, listClickHandler } from './eventHandlers.js';
import { getTasks } from './gateWay.js';
const listElem = document.querySelector('.list');
const createTaskButton = document.querySelector('.create-task-btn');

let tasks = getTasks();
tasks.then(el => renderTasks(el));

createTaskButton.addEventListener('click', buttonProcessor);
listElem.addEventListener('click', listClickHandler);
