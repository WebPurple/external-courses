function Calculator() {
  let counter = 0;

  function add(num) {
    if (num) {
      counter += num;
      return add;
    }
    return add;
  }
  function subtract(num) {
    if (num) {
      counter -= num;
      return subtract;
    }
    return subtract;
  }
  function multiply(num) {
    if (num) {
      counter *= num;
      return multiply;
    }
    return multiply;
  }
  function divide(num) {
    if (num) {
      counter /= num;
      return divide;
    }
    return divide;
  }
  function getResult() {
    return counter;
  }
  function reset() {
    counter = 0;
  }
  return {
    add,
    subtract,
    multiply,
    divide,
    getResult,
    reset,
  };
}
const calculator = Calculator();

module.exports = calculator;
