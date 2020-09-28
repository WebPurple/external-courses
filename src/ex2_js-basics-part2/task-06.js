"use strict"
const MAX_VALUE = 1000;
const WRONG_INPUT = 'Данные неверны';

function isSimple(number) {
  if (number <= MAX_VALUE && number !== 0 && number !== 1 && number % 1 === 0) {
    const sqrtOfInputNumber = Math.floor(Math.sqrt(number));
      for (let i = 2; i <= sqrtOfInputNumber; ++i) {
        if (number % i === 0) {
          return `Число ${number} - составное число`;
        }
      }

    return `Число ${number} - простое число`;
  }

  return WRONG_INPUT;
}

module.exports = isSimple;
