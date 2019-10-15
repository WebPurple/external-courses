(function Calculator(){
  let res = 0;
  const add = function add(x=0){
    res += x;
    return add;
  }
  const getResult = function result() {
      return res
  }
  const subtract = function subtract(x=0){
      res -= x;
      return subtract;
  }
  const divide = function divide(x=1){
      res /= x;
      return divide;
  }
  const multiply = function multiply(x=1){
      res *= x;
      return multiply
  }
  const reset = function reset(){
      res = 0;
      return res;
  }
  return {
    add,
    subtract,
    divide,
    multiply,
    getResult,
    reset
  }
}());
module.exports = Calculator;