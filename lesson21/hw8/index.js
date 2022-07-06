export function finishList() {
  const liList = document.querySelectorAll('li');
  liList.forEach(el => {
    const listItem = document.createElement('li');
    if (Number(el.textContent) % 2) {
      listItem.textContent = Number(el.textContent) + 1;
      el.after(listItem);
    } else {
      listItem.textContent = Number(el.textContent) - 1;
      el.before(listItem);
    }
  });
}
finishList();
