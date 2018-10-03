'use strict';

var detectType = function(x) {
  if(typeof x === 'number' || typeof x === 'string') {return typeof x;}
  else {return 'undefined';}
}

module.exports = detectType;
