'use strict'

function getEvenOddElements(arr) {
  if (Array.isArray(arr) === false) {
    return console.log('this is not a array');;
  }

  let zeroCounter = 0;
  let evenCounter = 0;
  let oddCounter = 0;
  for (var i = 0; i < arr.length; i++) {
    if ( (typeof(arr[i]) === 'number') && !Number.isNaN(arr[i])) {

      if (arr[i] === 0) {
        zeroCounter ++
      }
      else if (arr[i] % 2 === 0) {
        evenCounter ++
      }
      else if (arr[i] % 2 !== 0) {
        oddCounter ++
      }
    }
  }

  return [evenCounter, oddCounter, zeroCounter];
}

module.exports = getEvenOddElements;
