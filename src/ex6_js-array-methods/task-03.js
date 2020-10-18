'use strict'

function myEvery(array, callback) {
  let result = 0;

  for (let i = 0; i < array.length; ++i) {
    if (callback(array[i], i, array)) {
      ++result;
    }
  }

  if (result === array.length) {
    return true;
  } 

  return false;
}

module.exports = myEvery;
