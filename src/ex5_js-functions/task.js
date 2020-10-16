let Calculator = {
  result: 0,
  add: function add(value) {
    if (value !== undefined) {
      Calculator.result += value;
    }

    return add;
	},
	subtract: function subtract(value) {
    if (value !== undefined) {
      Calculator.result -= value;
    }

    return subtract;
	},
	divide: function divide(value) {
    if (value !== undefined) {
      Calculator.result /= value;
    }

		return divide;
	},
	multiply: function multiply(value) {
    if (value !== undefined) {
      Calculator.result *= value;
    }

		return multiply;
	},
	getResult() {
		return Calculator.result;
	},
	reset() {
    Calculator.result = 0;
    
		return Calculator.result;
	},
};

module.exports = Calculator;
