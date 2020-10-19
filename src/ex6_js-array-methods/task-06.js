function analogReduce(array, callback, initialValue) {
  let previousValue = array[0];

  if (initialValue !== undefined) {
    previousValue = callback(initialValue, array[0], 0, array);
  }
  
  for (let key = 1; key < array.length; key++) {
    previousValue = callback(previousValue, array[key], key, array);
  }
  
  return previousValue;
}

module.exports = analogReduce;
