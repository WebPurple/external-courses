const determiningTheTypeOfNumber = (x) => {
  if (x > 1 && x < 1000) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        return `Число ${x} - составное число`;
      }
    }

    return `Число ${x} - простое число`;
  }

  return "Данные неверны";
};

module.exports = determiningTheTypeOfNumber;
