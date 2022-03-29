const reduceCopy = (array, callback, initialValue) => {
  let i = 0;
  let previousValue = initialValue;

  if (!initialValue) {
    i = 1;
    previousValue = array[0];
  }

  for (i; i < array.length; i += 1) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
};

module.exports = reduceCopy;
