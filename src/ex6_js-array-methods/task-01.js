'use strict'

function mySlice(array, startIndex, endIndex) {
  let from = 0;
  let count = array.length;
  let returnedArray = [];

  if (startIndex !== undefined) {
      if (startIndex < 0) {
          if (Math.abs(startIndex) < array.length) {
              from = array.length + startIndex;
              count = startIndex * -1;
          }
      } else {
          from = startIndex;
          count = array.length - startIndex;
      }
  }

  if (endIndex !== undefined) {
      if (endIndex < 0) {
          count = Math.abs(startIndex) - Math.abs(endIndex);
      } else {
          if (endIndex < array.length) {
              count = endIndex - 1;
          } 
      }
  }

  for (let i = 0; i < count; ++i, ++from) {
      returnedArray.push(array[from]);
  }

  return returnedArray;
}

module.exports = mySlice;