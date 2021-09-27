function primeNumbers(numberExample) {
  let result;
  if (numberExample > 1000) {
    result = 'Данные неверны';
  } else if ((numberExample === 0) || (numberExample === 1)) {
    result = 'Не причисляется ни к простым, ни к составным числам';
  } else {
    let count = 0;
    for (let i = 2; i < numberExample; i += 1) {
      if (numberExample % i === 0) {
        count += 1;
      }
    }
    if (count) {
      result = `Число ${numberExample} - составное число`;
    } else {
      result = `Число ${numberExample} - простое число`;
    }
  }
  return result;
}

module.exports = primeNumbers;
