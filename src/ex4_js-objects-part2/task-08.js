'use strict'
var i = 1;
var arr;
function lowerCamelCase (str) {
  if (!str) return false
  arr = str.split(' ');
  arr[0] = arr[0].toLowerCase();
  for (i; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
};
module.exports = lowerCamelCase
