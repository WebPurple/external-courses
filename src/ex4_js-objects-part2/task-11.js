'use strict'
var arr, result, i, key;
function taskEleven(str) {
  arr = str.split('');
  result = {};
  for (i = 0; i < arr.length; i++) {
    if (result[arr[i]] !== undefined) {
      result[arr[i]]++;
    }
    else result[arr[i]] = 1;
  }

  for (key in result) {
    if (result.hasOwnProperty(key)){
      console.log(key + ' - ' + result[key]);
    }
  }
};
module.exports = taskEleven
