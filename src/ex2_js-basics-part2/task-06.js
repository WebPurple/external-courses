// eslint-disable-next-line consistent-return
function isPrime(n) {
  if (n <= 1000) {
    let del = 0;
    if (n === 0 || n === 1) {
      return 'Не причисляется ни к простым, ни к составным числам';
    }
    if (n !== 0 || n !== 1) {
      // eslint-disable-next-line no-plusplus
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          del += 1;
        }
      }
      if (del !== 0) {
        return `Число ${n} - составное число`;
      }
      if (del === 0) {
        return `Число ${n} - простое число`;
      }
    }
  }
  if (n > 1000) {
    return 'Данные неверны';
  }
}

module.exports = isPrime;
