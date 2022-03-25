let result = 0;

const Calculator = () => {
  function add(num = 0) {
    result += num;

    return add;
  }

  function subtract(num = 0) {
    result -= num;

    return subtract;
  }

  function divide(num = 1) {
    result /= num;

    return divide;
  }

  function multiply(num = 1) {
    result *= num;

    return multiply;
  }

  function getResult() {
    return result;
  }

  function reset() {
    result = 0;

    return result;
  }

  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset,
  };
};

const calculator = Calculator();

module.exports = calculator;
