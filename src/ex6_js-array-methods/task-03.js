function analogEvery(arr, callback) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) count++;
  }
  if (count === arr.length) return true

  return false;
}

module.exports = analogEvery;
