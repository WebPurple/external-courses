function maxValue(array) {
  let max = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

module.exports = maxValue;
