// localStorage.setItem(JSON.stringify({name:'Jhon'}))
localStorage.setItem('name', JSON.stringify('Tom'));
localStorage.setItem('age', JSON.stringify(17));
Object.entries(localStorage).forEach(elem => console.log(elem));
function getLocalStorageData() {
  return Object.entries(localStorage).reduce((acc, [key, value]) => {
    let resElem;
    try {
      resElem = JSON.parse(value);
    } catch (e) {
      resElem = value;
    }

    return { ...acc, [key]: resElem };
  }, {});
}
