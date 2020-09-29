function checkPrimeNumber(num) {
  let message = '';

  if (num < 1000) {
    if (num === 0 || num === 1) {
      message = `Число ${num} - простое число`;
    }
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        message = `Число ${num} - составное число`;
        break;
      }
      message = `Число ${num} - простое число`;
    }
  }

  if (num > 1000) {
    message = 'Данные неверны';
  }

  return message;
}

module.exports = checkPrimeNumber;