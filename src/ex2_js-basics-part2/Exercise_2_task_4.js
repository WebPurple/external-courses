function identicalElements(array) {
  let result;
  const temp = array[0];
  let same = 0;
  for (let i = 1; i < array.length; i += 1) {
    if (temp === array[i]) {
      same += 1;
    }
  }
  if (same === (array.length - 1)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

module.exports = identicalElements;
