function isPrimeNumber(value) {
  if (value > 1000) {return "Данные неверны";}

  if (value > 1) {
    for (var i = 2; i < value; i++) {
      if (value % i === 0) {
        return "Число " + value + " - составное число";
      } else if (value % i !== 0) {
        return "Число " + value + " - простое число";
      }
    }
  }
    return "Данные неверны";
}

module.exports = isPrimeNumber;