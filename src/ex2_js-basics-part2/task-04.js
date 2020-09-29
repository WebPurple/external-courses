function compaireItemArray(array) {
  let flag = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      flag = false;
      break;
    }
  }

  return flag;
}

module.exports = compaireItemArray;