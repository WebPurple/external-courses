'use strict'

function myFilter(array, callback) {
  let returnedArray = [];

  for (let i = 0; i < array.length; ++i) {
    if (callback(array[i], i, array)) {
      returnedArray.push(array[i]);
    }
  }

  return returnedArray;
}

module.exports = myFilter;
