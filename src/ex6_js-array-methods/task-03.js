'use strict'
var i;
var result;
function analogueEvery (array, callback) {
  for (i = 0; i < array.length; i++) {
    result = callback(array[i], i, array);
    if (result !== true) break;
  }
  return result;
};
module.exports = analogueEvery;