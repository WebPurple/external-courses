'use strict'

function myReduce(array, callback, initialValue) {
  let index = 0;
  let previousValue = 0;

  if (initialValue !== undefined) {
    previousValue = initialValue;
  } else {
    previousValue = array[0];
    index = 1;
  }

  for (let i = index; i < array.length; ++i) {
    previousValue = callback(previousValue, array[i], i, array);
  }

  return previousValue;
}

module.exports = myReduce;
