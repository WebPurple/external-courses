const printSimple = (num) => {
  if (isNaN(num) || num > 1000) {
    return 'Данные неверны';
  }

  if (num === 0 || num === 1) return 'Не причисляется ни к простым, ни к составным числам';

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return `Число ${num} - составное число`;
    }
  }

  return `Число ${num} - простое число`;
};

module.exports = printSimple;
