function getOwnProps(obj) {
  const newArray = [];
  for (let prop of Object.entries(obj)) {
    console.log(typeof prop[1]);
    if (obj.hasOwnProperty(prop[0]) && typeof prop[1] != 'function') {
      // prop;
      newArray.push(prop[0]);
    }
  }
  return newArray;
}
const newObj = {
  __proto__: String,
  das: '22',
  menu() {
    return nodeVersions;
  },
};
let testData = getOwnProps(newObj);
