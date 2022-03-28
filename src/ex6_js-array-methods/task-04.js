const filterCopy = (array, callback) => {
  const copyArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) {
      copyArray.push(array[i]);
    }
  }

  return copyArray;
};

module.exports = filterCopy;
