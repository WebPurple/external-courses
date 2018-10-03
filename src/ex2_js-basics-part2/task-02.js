'use strict';

function viewArray(arr) {
  console.log('Обзор массива:');
  for(var i=0; i<arr.length; i++) {
    console.log('[' + i + '] => ' + arr[i]);
  }
  console.log('Всего элементов: ' + arr.length);
}
