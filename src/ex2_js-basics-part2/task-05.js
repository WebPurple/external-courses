'use strict'

function getMaxValue(arr) {
  if (Array.isArray(arr) === false) {
    return 'это не массив';
  }

  let maxValue = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if( (typeof(arr[i]) !== 'number') || Number.isNaN(arr[i]) ) {
        return `Это должен быть массив чисел. ${arr[i]} - не число`;
    } else if (arr[i] > maxValue) {
      maxValue = arr[i]
    }
  }
  return maxValue;
}

module.exports = getMaxValue;
