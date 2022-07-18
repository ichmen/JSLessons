function getStorage() {
  return (
    JSON.parse(localStorage.getItem('tasksList')) || [
      { text: 'Buy milk', done: false, id: 1, date: new Date() },
      { text: 'Pick up Tom from airport', done: false, id: 2, date: new Date() },
      { text: 'Visit party', done: false, id: 3, date: new Date() },
      { text: 'Visit doctor', done: true, id: 4, date: new Date() },
      { text: 'Buy meat', done: true, id: 5, date: new Date() },
    ]
  );
}
/*
1. initialization:
read Local storage => let tasks [{}...]
render list   f(tasks);

2. list item added
task push ({})
local storage change 'tasksList'
render list   f(tasks)

3. checkbox change goto 2

4. event 'storage' goto 1




*/
