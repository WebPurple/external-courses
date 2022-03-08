function sameElements(array) {
  let Value;
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] === array[index + 1]) {
        Value = true;
    } else {
        Value = false;
      break;
    }
  }
  return Value;
}
module.exports = checkingIdenticalElements;
