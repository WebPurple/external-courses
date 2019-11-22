'use strict';
(function Calculator() {
	let result = 0;
	function add(value = 0) {
		result += value;
		return add;
	}
	function subtract(value = 0) {
		result -= value;
		return subtract;
	}
	function divide(value = 1) {
		if(result === 0) {
			return divide;
		}	
		if(value === 0) {
			return divide;
		}
		result /= value;
		return divide;
	}
	function multiply(value = 0) {
		if(result === 0) {
			result = 1;
		}
		result *= value;
		return multiply;
	}
	function getResult() {
		return result
	}
	function reset() {
		result = 0;
		return result;
	}	
	return {add, subtract, divide, multiply, getResult, reset}
}());
module.exports = Calculator;