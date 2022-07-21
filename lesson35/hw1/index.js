function parseUser(strJson) {
  try {
    return JSON.parse(strJson);
  } catch (e) {
    return null;
  }
}

const str = "name:'Tom'";
const jStr = JSON.stringify(str);
// console.log(jStr);

console.log(parseUser(jStr));
console.log(parseUser(str));
