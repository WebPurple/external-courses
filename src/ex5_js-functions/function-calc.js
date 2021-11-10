function Calculator() {
  let currentValue = 0;

  const add = function add(addValue = 0) {
    currentValue += addValue;
    return add;
  };
  const subtract = function subtract(subtractValue = 0) {
    currentValue -= subtractValue;
    return subtract;
  };
  const divide = function divide(divideValue = 1) {
    currentValue /= divideValue;
    return divide;
  };
  const multiply = function multiply(multiplyValue = 1) {
    currentValue /= multiplyValue;
    return multiply;
  };
  const getResult = function getResult() {
    console.log(currentValue);
    return getResult;
  };
  const reset = function reset() {
    currentValue = 0;
    return reset;
  };

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
}

const calculator = Calculator();

calculator.add();
calculator.subtract();
calculator.divide();
calculator.multiply();

module.exports = calculator;
