const isPrime = (value) => {
  if (value < 0 || value > 1000) {
    return 'Данные неверны';
  }
  if (value === 0 || value === 1) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }
  for (let i = 2; i < value; i += 1) { if (value % i === 0) return `Число ${value} - составное число`; }
  return `Число ${value} - простое число`;
};

module.exports = isPrime;
