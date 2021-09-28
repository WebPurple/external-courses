function primeNumbers(numberExample) {
  if (numberExample > 1000) {
    return 'Данные неверны';
  }
  if ((numberExample === 0) || (numberExample === 1)) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }
  let count = 0;
  for (let i = 2; i < numberExample; i += 1) {
    if (numberExample % i === 0) {
      count += 1;
    }
  }
  if (count) {
    return `Число ${numberExample} - составное число`;
  }
  return `Число ${numberExample} - простое число`;
}

module.exports = primeNumbers;
