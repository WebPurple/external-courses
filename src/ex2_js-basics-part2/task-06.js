'use strict'

function isPrimeNumber(num) {
  if(typeof(num) !== 'number' || Number.isNaN(num)) {
    return num + ' не число';
  }
  if(num > 1000) {
    return 'Данные неверны';
  }

  if (num < 2) {
    return `Число ${num} - меньше 2`;
  } else if (num === 2) {
    return `Число ${num} - простое число`;
  } else if (num % 2 === 0) {
    return `Число ${num} - составное число`;
  } else if (num % 2 !== 0) {
    return `Число ${num} - простое число`;
  }
  return num;
}

module.exports = isPrimeNumber;
