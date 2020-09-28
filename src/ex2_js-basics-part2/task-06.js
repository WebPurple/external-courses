function numCheck(e) {
  if (typeof e === "number" && e <= 1000) {
    if (e % 2 !== 0) {
      return `Число ${e} - простое число`;
    }

    if (e % 2 === 0) {
      return `Число ${e} - составное число`;
    }
  }
  return "Данные неверны";
}

module.exports = numCheck;
