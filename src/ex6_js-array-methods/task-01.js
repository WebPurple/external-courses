'use strict'

function mySlice(array, startIndex, endIndex) {
  let from = 0;
  let count = 0;
  let returnedArray = [];

  if (endIndex === undefined) {
      if (startIndex === undefined) {
          count = array.length;
          from = 0;
      } else {
          if (startIndex > 0) {
              count = array.length - startIndex;
              from = startIndex;
          } else {
              from = array.length + startIndex;
              count = startIndex * -1;
          }
      }
  } else {
      if (endIndex > 0) {
          if (endIndex <= array.length) {
              count = endIndex - 1;
          } else {
              count = array.length - 1;
          }

          if (startIndex < 0) {
              from = 0;
              count = 0;
          }

          from = startIndex;

      } else {
          if (Math.abs(endIndex) <= array.length) {
              count = array.length + endIndex - 1;
          } else {
              count = 0;
          }
      }

      if (startIndex < 0) {
          from = array.length + startIndex;
      }
  }

  for (let i = 0; i < count; ++i, ++from) {
      returnedArray.push(array[from]);
  }

  return returnedArray;
}

module.exports = mySlice;