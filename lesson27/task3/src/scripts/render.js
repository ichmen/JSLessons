import { clearList } from './common.js';
import { sortByDoneByDate, checkBoxProcessor } from './common.js';

const listElem = document.querySelector('.list');
export const renderTasks = tasksList => {
  clearList();
  const tasksElems = tasksList.sort(sortByDoneByDate).map(checkBoxProcessor);

  listElem.append(...tasksElems);
};
