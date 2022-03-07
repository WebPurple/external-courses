function typeOfNumber(a) {
  if (a > 1000) {
    return 'данные не верны';
  }

  if (a === 1) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }

  if (a === 0) {
    return 'Не причисляется ни к простым, ни к составным числам';
  }

  for (let i = 2; i < a; i += 1) {
    if (a % i === 0 && a < 1000) {
      return `Число ${a} - составное число`;
    }
  }
  console.log(`Число ${a} - простое число`);
  return a;
}

module.exports = typeOfNumber();
