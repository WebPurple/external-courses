// eslint-disable-next-line no-use-before-define
const calculator = Calculator();
function Calculator() {
  let counter = 0;
  return {
    add(num) {
      if (num) {
        counter += num;
        return calculator.add;
      }
      return calculator.add;
    },
    subtract(num) {
      if (num) {
        counter -= num;
        return calculator.subtract;
      }
      return calculator.subtract;
    },
    multiply(num) {
      if (num) {
        counter *= num;
        return calculator.multiply;
      }
      return calculator.multiply;
    },
    divide(num) {
      if (num) {
        counter /= num;
        return calculator.divide;
      }
      return calculator.divide;
    },
    getResult() {
      return counter;
    },
    reset() {
      counter = 0;
    },
  };
}

module.exports = calculator;
