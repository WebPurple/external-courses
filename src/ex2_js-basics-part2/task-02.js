'use strict';

function viewArray(arr) {
  var i;
  for(i=0; i<arr.length; i++) {
    console.log('[' + i + '] => ' + arr[i]);
  }
  console.log('Всего элементов: ' + arr.length);
}

module.exports = viewArray;
