'use strict'
function taskSix (n) {
  var x = 0
  var i = 1
  if (n <= 1000 && n > 0) {
    for (i; i <= n; i++) {
      if (n % i === 0) { x++; }
    }
    if (n === 1 || n === 2 || n === 3 || x === 2) { return 'Число ' + n + ' - простое число'; }
    return 'Число ' + n + ' - составное число'
  }
  return 'Данные неверны'
}
module.exports = taskSix
