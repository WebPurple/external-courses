let Calculator = {
  result: 0,
  add: function addFunction(value = 0) {
    Calculator.result += value;
    return addFunction;
  },
  subtract: function subtractFunction(value = 0) {
    Calculator.result -= value;
    return subtractFunction;
  },
  divide: function divideFunction(value = 1) {
    Calculator.result /= value;
    return divideFunction;
  },
  multiply: function multiplyFunction(value = 1) {
    Calculator.result *= value;
    return multiplyFunction;
  },
  getResult: function() {
    return Calculator.result;
  },
  reset: function() {
    Calculator.result = 0;
    return Calculator.result;
  },
};
module.exports = Calculator