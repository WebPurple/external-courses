(function Calculator(){
  let res = 0;
  function add(x=0){
    res += x;
    return add;
  }
  function result() {
      return res
  }
  function subtract(x=0){
      res -= x;
      return subtract;
  }
  function divide(x=1){
      res /= x;
      return divide;
  }
  function multiply(x=1){
      res *= x;
      return multiply
  }
  function reset(){
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