'use strict';

function viewArray(arr) {
  var i;
  console.log('Обзор массива:');
  for(i=0; i<arr.length; i++) {
    console.log('[' + i + '] => ' + arr[i]);
  }
  console.log('Всего элементов: ' + arr.length);
}

module.exports = viewArray;
