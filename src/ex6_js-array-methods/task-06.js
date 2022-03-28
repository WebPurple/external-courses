function cloneReduce(array, callback, initialValue) {
  let previousValue = 0;

  if (initialValue) {
    previousValue = initialValue;
  } else {
    previousValue = array[0];
  }

  array.forEach((e, i) => {
    if (previousValue === array[0] && i === 0) {
      previousValue = array[0];
    } else {
      previousValue = callback(previousValue, e, i, array);
    }
  });
  return previousValue;
}

module.export = cloneReduce;
