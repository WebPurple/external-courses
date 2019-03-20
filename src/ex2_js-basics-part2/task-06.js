function testNum(num) {
    if (num <= 1 || num > 1000) {
        return 'Данные неверны';
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'Число ' + num + ' - составное число';
        }
    }
  return 'Число ' + num + ' - простое число';
}
module.exports = testNum;