function taskSix(n) {
  var x = 0;
  if (n <= 1000 && n > 0) {
    for (var i = 1; i <= n; i++) {
      if (n % i === 0) { x++; }
    }
    if (n === 1 || n === 2 || n === 3 || x === 2) { return "Число " + n + " - простое число"; }
    else return "Число " + n + " - составное число";
  }
  return 'Данные неверны';
}
module.exports = taskSix;