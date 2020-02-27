'use strict'

function getArrayElements(arr) {
  if (Array.isArray(arr) === false) {
    return 'это не массив';
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  console.log('количество элементов - ',arr.length);
  // lint ругается, если сделать просто return
  return arr.length;
}

module.exports = getArrayElements;
