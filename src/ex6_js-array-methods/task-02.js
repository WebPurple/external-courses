function analogSome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) return true;
  }

  return false
}

module.exports = analogSome;
