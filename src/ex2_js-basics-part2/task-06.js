'use strict';

function isSimpleNumber(x) {
  var i;
  if(typeof x !== 'number' || isNaN(x) || x < 2 || x > 1000 || (x - Math.floor(x)) > 0 ) {return 'Данные не верны';}
  var result = 'Число ' + x + ' - простое число';
  for(i=x-1; i>1; i--) {
    if(!(x % i)) {result = 'Число ' + x + ' - составное число'; break;}
  }
  return result;
}

module.exports = isSimpleNumber;
