const Calculator = {
  curResult: 0,

  getResult: function getResult() {
    return Calculator.curResult;
  },
  reset: function reset() {
    Calculator.curResult = 0;
    return Calculator.curResult;
  },
  add: function add(num) {
    let number = +num;
    if (isNaN(number)) {
      number = 0;
    }
    Calculator.curResult += number;
    return add;
  },
  subtract: function subtract(num) {
    let number = +num;
    if (isNaN(number)) {
      number = 0;
    }
    Calculator.curResult -= number;
    return subtract;
  },
  divide: function divide(num) {
    let number = +num;
    if ((isNaN(number)) || number == 0) {
      number = 0;
    }

    if (Calculator.curResult == 0) {
      Calculator.curResult = number;
      number = 1;
    }

    Calculator.curResult /= number;
    return divide;
  },
  multiply: function multiply(num) {
    let number = +num;
    if ((isNaN(number)) || number == 0) {
      number = 0;
    }

    if (Calculator.curResult == 0) {
      Calculator.curResult = number;
      number = 1;
    }
    Calculator.curResult *= number;
    return multiply;
  },
};

module.exports = Calculator;
