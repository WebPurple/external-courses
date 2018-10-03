'use strict';

var f = function(x) {
  if(typeof x === 'number' || typeof x === 'string') {return typeof x;}
  else {return 'undefined';}
}
