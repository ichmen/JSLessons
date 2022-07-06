function createArrayOfFunctions(numArrayLength = 0) {
  if (!Number.isInteger(numArrayLength)) {
    return null;
  }
  let functArray = [];
  for (let i = 0; i < numArrayLength; i += 1) {
    functArray[i] = function () {
      return i;
    };
  }
  return functArray;
}
