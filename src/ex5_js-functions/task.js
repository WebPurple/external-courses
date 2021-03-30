let calculator = {
  result: 0,

  add: function (a) {
    if (a !== undefined) {
      calculator.result = +calculator.result + +a;
    }

    return calculator.add;
  },

  subtract: function (a) {
    if (a !== undefined) {
      calculator.result = +calculator.result - +a;
    }

    return calculator.subtract;
  },

  divide: function (a) {
    if (a !== undefined) {
      calculator.result = +calculator.result / +a;
    }

    return calculator.divide;
  },

  multiply: function (a) {
    if (a !== undefined) {
      calculator.result = +calculator.result * +a;
    }

    return calculator.multiply;
  },

  getResult: function () {
    return this.result;
  },

  reset: function () {
    this.result = 0;
    return this.result;
  },
};

module.exports = calculator;
