const SameElementArray = (array) => {
  let val = true;
  array.sort((a, b) => a - b)
    .forEach((value, index, arr) => {
      if (index !== arr.length - 1) {
        if (value !== arr[index + 1]) {
          val = false;
          return val;
        }
      }
      return false;
    });
  return val;
};

module.exports = SameElementArray;
