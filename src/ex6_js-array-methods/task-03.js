const everyCopy = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }

  return true;
};

module.exports = everyCopy;
