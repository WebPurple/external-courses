var calculator = {
	result: 0,
	add:function add(value) {
		if(typeof value === 'number') {
		calculator.result += value;
		}
		return add;
	},
	subtract:function subtract(value) {
		if(typeof value === 'number') {
			calculator.result -= value;
		}
		return subtract;
	},
	divide:function divide(value) {
		if(typeof value === 'number') {
			calculator.result /= value;
		}
		return divide;
	},
	multiply:function multiply(value) {
		if(typeof value === 'number') {
			calculator.result *= value;
		}
		return multiply;
	},
	getResult:function getResult(value) {
		return this.result;
	},
	reset:function reset(value) {
		calculator.result = 0;
		return this.result;
	},
}
module.exports = calculator;