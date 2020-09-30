const determiningTheTypeOfNumber = (x) => {
  let typeOfNumber = `Число ${x} - простое число`;

  if (x > 1 && x < 1000) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) {
        typeOfNumber = `Число ${x} - составное число`;

        return typeOfNumber;
      }
    }

    return typeOfNumber;
  }

  return "Данные неверны";
};



module.exports = determiningTheTypeOfNumber;
