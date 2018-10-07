'use strict';

function maxElement(arr) {
  return arr.reduce(function(max, current) {
    return current > max ? current : max;
  }, '');
}

module.exports = maxElement;
