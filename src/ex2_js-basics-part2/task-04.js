'use strict';

function isAllElementsEqual(arr) {
  switch(arr.length) {
    case 0: return false;
    case 1: return true;
    default:
      var i = 0;
      while(i<arr.length && arr[i++] === arr[i]);
      if(i === arr.length) {return true;}
      else {return false;}
  }
}

module.exports = isAllElementsEqual;
