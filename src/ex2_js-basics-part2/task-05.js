function GetMaxElementOfArr(array) {
  let max = 0;
  array.forEach((item) => {
    if (item < 0 || typeof (item) !== 'number') {
      return undefined;
    }
    if (item > max) {
      max = item;
    }
    return max;
  });
  return max;
}

module.exports = GetMaxElementOfArr;
