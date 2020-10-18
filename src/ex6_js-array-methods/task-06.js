'use strict'

function myReduce(array, callback, initialValue) {
  let index = 1;
  let previousValue = array[0];

  if (initialValue !== undefined) {
    previousValue = initialValue;
    index = 0;
  }

  for (let i = index; i < array.length; ++i) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = myReduce;
