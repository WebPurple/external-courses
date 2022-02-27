function simpleNumber(num) {
  let value = 0;
  if ((!isNaN(num)) || (typeof (num) === 'number')) {
    if (num > 1000) {
      return 'Данные неверны';
    } if ((num === 0) || (num === 1)) {
      return 'Не причисляется ни к простым, ни к составным числам';
    }
    for (let i = 2; i < (num - 1); i += 1) {
      if (num % i === 0) {
        value = 1;
      }
    }
    if (value === 1) {
      return `Число ${num} - составное число`;
    }
    return `Число ${num} - простое число`;
  }
  return 'Не является числом';
}

module.exports = simpleNumber;
