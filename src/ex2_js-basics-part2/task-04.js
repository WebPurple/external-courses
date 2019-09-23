function isSameValue(arr) {
  let result = true;
  const last = arr[0];
  arr.forEach((item) => {
    if (item !== last) {
      result = false;
    }
  });
  return result;
}

module.exports = isSameValue;