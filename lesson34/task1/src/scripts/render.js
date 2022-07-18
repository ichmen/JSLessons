import { clearList } from './common.js';
import { sortByDoneByDate, checkBoxProcessor } from './common.js';

const listElem = document.querySelector('.list');
export const renderTasks = tasksList => {
  const taskText = document.querySelector('.task-input');
  taskText.value = '';
  clearList();
  const tasksElems = tasksList.sort(sortByDoneByDate).map(checkBoxProcessor);

  listElem.append(...tasksElems);
};
