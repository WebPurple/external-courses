'use strict';

function checkOneCheck(number) {
  if (number > 1000) return "Данные неверны";
  if (number === 0 || number === 1) return number + " принадлежит к классу нейтральных чисел";
  for (let i = 2; i < number; i++) {
    if (!(number % i)) return number + " - составное число";
  }
  return number + " - простое число";
};

module.exports = checkOneCheck;