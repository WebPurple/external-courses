'use strict';

function isAllElementsEqual(arr) {
  var i;
  switch(arr.length) {
    case 0: return false;
    case 1: return true;
    default:
      i = 0;
      while(i<arr.length && arr[i++] === arr[i]);
      if(i === arr.length) {return true;}
      return false;
  }
}

module.exports = isAllElementsEqual;
