'use strict';

function numbersEvenOddZero(numArray) {
  var result = [0, 0, 0]; // четные, нечетные, нули
  var message = '';
  for(var i=0; i<numArray.length; i++) {
    if(numArray[i] === 0) {result[2]++;}    // ноль
    else if(numArray[i] % 2) {result[1]++;} // нечетное
    else {result[0]++;}                     // четное
  }
  console.log('Подсчет количества числовых элементов в массиве:');
  if(result[0]) {message += 'четных: ' + result[0];}
  if(result[1]) {message += (message ? '; ' : '') + 'нечетных: ' + result[1];}
  if(result[2]) {message += (message ? '; ' : '') + 'нулей: ' + result[2];}
  console.log(message);
  console.log('[' + result.join(', ') + ']');
  return result;
}
