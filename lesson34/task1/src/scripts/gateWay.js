const baseUrl = 'http://62d56536d4406e523559e20d.mockapi.io/avi/v1/taskList';

export function getTasks() {
  return fetch(baseUrl).then(response => response.json());
}

export function setTask(taskItem) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(taskItem),
  });
}
export function changeTask(taskItem) {
  const { id, ...task } = taskItem;
  return fetch(`${baseUrl}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(task),
  });
}
export function deleteTask(id) {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
}
