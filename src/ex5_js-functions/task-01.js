function Calculator() {
  let result = 0;
  function getResult() {
    return result;
  }
  function reset() {
    result = 0;
    return result;
  }
  function add(...args) {
    if (args.length) {
      result += args.reduce((acc, value) => acc + value);
    } else {
      result += 0;
    }
    return add;
  }
  function subtract(...args) {
    if (args.length) {
      result -= args.reduce((acc, value) => acc + value);
    } else {
      result += 0;
    }
    return subtract;
  }
  function divide(...args) {
    if (args.length) {
      result /= args.reduce((acc, value) => acc * value);
    } else {
      result += 0;
    }
    return divide;
  }
  function multiply(...args) {
    if (args.length) {
      result *= args.reduce((acc, value) => acc * value);
    } else {
      result += 0;
    }
    return multiply;
  }
  return {
    getResult,
    reset,
    add,
    subtract,
    divide,
    multiply,
  };
}
const calculator = Calculator();

module.exports = calculator;
