'use strict';

function maxValue(arr) {
  let maxVal = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i]
    };
  }
  return maxVal;
}
module.exports = maxValue;