const calculat = {
  result: 0,
  getResult() {
    return calculat.result;
  },
  reset() {
    calculat.result = 0;
    return calculat.result;
  },
  add(...args) {
    if (args.length) {
      calculat.result += args.reduce((acc, value) => acc + value);
    } else {
      calculat.result += 0;
    }
    return calculat.add;
  },
  subtract(...args) {
    if (args.length) {
      calculat.result -= args.reduce((acc, value) => acc + value);
    } else {
      calculat.result += 0;
    }
    return calculat.subtract;
  },
  divide(...args) {
    if (args.length) {
      calculat.result /= args.reduce((acc, value) => acc * value);
    } else {
      calculat.result += 0;
    }
    return calculat.divide;
  },
  multiply(...args) {
    if (args.length) {
      calculat.result *= args.reduce((acc, value) => acc * value);
    } else {
      calculat.result += 0;
    }
    return calculat.multiply;
  },
};
function Calculator() {
  return calculat;
}

const calculator = Calculator();

module.exports = calculator;
