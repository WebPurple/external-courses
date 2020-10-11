'use strict'

function mySlice(array, startIndex, endIndex) {
  let returnedArray = [];
  let thisStartIndex= 0;
  let thisEndIndex = 0;

  if (startIndex > 0) {
    thisStartIndex = startIndex;
  }
    
  if (endIndex > 0) {
    thisEndIndex = endIndex;
  }

  if (endIndex < 0 && startIndex < 0) { 
    thisStartIndex = endIndex * -1 - 1;
    thisEndIndex = startIndex * -1 - 1;
  } else if (endIndex < 0) {
    thisEndIndex = array.length - 1;
  }

  if (startIndex === undefined) {
    thisStartIndex = 0;
  }

  if (endIndex === undefined ){
    thisEndIndex = array.length;
  }

  while (thisStartIndex < thisEndIndex) {
    returnedArray.push(array[thisStartIndex]);
    ++thisStartIndex;
  }

  return returnedArray;
}

module.exports = mySlice;
