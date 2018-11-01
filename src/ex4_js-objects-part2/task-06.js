'use strict'
function titleSymbol (str) {
  var arr = str.split(' '), i = 0;
  for (i; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
};
module.exports = titleSymbol;
