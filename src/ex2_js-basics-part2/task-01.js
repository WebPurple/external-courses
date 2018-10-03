'use strict';

function detectType(x) {
  if(typeof x === 'number' || typeof x === 'string') {return typeof x;}
  else {return 'undefined';}
}

module.exports = detectType;
