function countNumbers(arr) {
  let result = [0, 0, 0];
  arr.forEach((item) => {
    if (typeof item === 'number' && !Number.isNaN(item)) {
      if (item === 0) {
        result[2] += 1;
      } else if (item % 2 === 0) {
        result[0] += 1;
      } else {
        result[1] += 1;
      }
    }
  });
  return result;
}

module.exports = countNumbers;