function analogReduce(array, callback, initialValue) {
  let previousValue = array[0];

  if (initialValue !== undefined) {
    previousValue = callback(initialValue, array[0], 0, array);
  }
  
  for (let key = 0; key < array.length - 1; key++) {
    previousValue = callback(previousValue, array[key + 1], (key + 1) , array);
  }
  
  return previousValue;
}

module.exports = analogReduce;
