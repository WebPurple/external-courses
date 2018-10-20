'use strict'
var i;
var result;
function analogueSome (array, callback) {
  for (i = 0; i < array.length; i++) {
    result = callback(array[i], i, array);
    if (result) break;
  }
  return result;
};
module.exports = analogueSome;