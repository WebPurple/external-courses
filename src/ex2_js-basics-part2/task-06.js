function isPrimeNumber(value) {
  if (value < 1000) {
    if (value < 2) {
      return "Число " + value + " - составное число";
    }
    for (var i = 2; i < value; i++) {
      if (value % i === 0) {
        return "Число " + value + " - составное число";
      }
    }
    return "Число " + value + " - простое число";
  }
    return "Данные неверны";
}

module.exports = isPrimeNumber;