function isPrimeNumber(n) {
  let result;
  if (n > 1 && n < 1000) {
    result = `Число ${n} - простое число`;
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        result = `Число ${n} - составное число`;
      }
    }
  } else {
    result = 'Данные неверны';
  }
  return result;
}

module.exports = isPrimeNumber;
