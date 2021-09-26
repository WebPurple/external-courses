function primeNumber(value) {
  if (value > 1 && value < 1000) {
    for (let i = 2; i < value; i += 1) {
      if (value % i === 0) {
        console.log(`Число ${value} - составное число`);
        return `Число ${value} - составное число`;
      }
    }
    return `Число ${value} - простое число`;
  }

  if (value === 0 || value === 1) {
    console.log('Не причисляется ни к простым, ни к составным числам');
    return 'Не причисляется ни к простым, ни к составным числам';
  }
  console.log('Данные неверны');
  return 'Данные неверны';
}

module.exports = primeNumber;
