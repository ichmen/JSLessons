import { renderTasks } from './render.js';
import { getStorage } from './storage.js';
import { storageChange, buttonProcessor, listClickHandler } from './eventHandlers.js';

const listElem = document.querySelector('.list');
const createTaskButton = document.querySelector('.create-task-btn');

globalThis.tasks = getStorage();
renderTasks(tasks);

window.addEventListener('storage', storageChange);
createTaskButton.addEventListener('click', buttonProcessor);
listElem.addEventListener('click', listClickHandler);
