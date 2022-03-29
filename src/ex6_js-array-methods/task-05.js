const mapCopy = (array, callback) => {
  const copyArray = [];

  for (let i = 0; i < array.length; i += 1) {
    copyArray.push(callback(array[i], i, array));
  }

  return copyArray;
};

module.exports = mapCopy;
