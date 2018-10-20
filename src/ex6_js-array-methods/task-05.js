'use strict'
var newArr,i;
function analogueMap (array, callback) {
  newArr = [];
  for (i = 0; i < array.length; i++) {
      newArr.push(callback(array[i], i, array));
  }
  return newArr;
};
module.exports = analogueMap;