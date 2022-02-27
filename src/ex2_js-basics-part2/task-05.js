function maxValue(arr) {
  let value = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > value) {
      value = arr[i];
    }
  }
  return value;
}

module.exports = maxValue;
