"use strict"

function findMaxInArray(inputArray) {
  let maxValue = inputArray[0];
  
  for (let i = 1; i < inputArray.length; ++i) {
    if (inputArray[i] > maxValue ) {
      maxValue = inputArray[i];
    }
  }

  return maxValue;
}

module.exports = findMaxInArray;
