'use strict'

function isIdenticalValues(arr) {
  if (Array.isArray(arr) === false) {
    return 'это не массив';
  }

  let isEqually = true

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[0]) {
      isEqually = true;
    } else {
      isEqually = false;
    }
  }
  return isEqually;
}

module.exports = isIdenticalValues;
