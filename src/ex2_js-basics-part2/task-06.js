function typeNumber(variable) {
  if (Number.isInteger(variable) && variable < 1001 && variable > -1) {
      if (variable === 0 || variable === 1) {
          return 'Не причисляется ни к простым, ни к составным числам';
      }

      for (let i = 2; i < variable; i++) {
          if (variable % i === 0) {
              return `Число ${variable} - составное число`;
          }
      }

      return `Число ${variable} - простое число`;
  }

  return 'Данные неверны';
}

module.exports = typeNumber;
