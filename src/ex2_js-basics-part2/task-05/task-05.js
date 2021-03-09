/*jshint esversion: 6 */
"use strict"
 
function outputMaxNumberInArray(array) {
  let minNumber = array[0];
  let maxNumber = minNumber;
  for (let i = 1; i < array.length; ++i) {
      if (array[i] > maxNumber) maxNumber = array[i];
      if (array[i] < minNumber) minNumber = array[i];
  }

  return maxNumber;
}

let testArrey = [1,1,2,6,1,3,6,5,7,7];

alert (outputMaxNumberInArray(testArrey));