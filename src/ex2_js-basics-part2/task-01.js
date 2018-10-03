'use strict';

function detectType(x) {
  if(typeof x === 'number' || typeof x === 'string') {return typeof x;}
  return 'undefined';
}

module.exports = detectType;
