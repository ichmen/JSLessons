function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}

function getItemsArray() {
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(elementsArray);
  return Array.from(elementsArray);
}

getItemsList();
getItemsArray();
export { getItemsList, getItemsArray };
