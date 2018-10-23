var Calculator;
function Counter(){
    var result = 0;
    function getResult(){
        return result;
    }
    function reset(num = 0){
      result *= 0; 
      return reset; 
    }
    function add(num = 0){
        result += num;
        return add;
    }
    function subtract(num = 0){
        result -= num;
        return subtract;
    }
    function divide(num = 1){
        result /= num;
        return divide;
    }
    function multiply(num = 1){
        result *= num;
        return multiply;
    }
    return {getResult, reset, add, subtract, divide, multiply};
}
Calculator = new Counter();
console.log(Calculator.getResult()); // 0
Calculator.add(5);
console.log(Calculator.getResult()); // 5
Calculator.reset();
console.log(Calculator.getResult()); // 0
Calculator.add(5);
Calculator.subtract(2);
console.log(Calculator.getResult()); // 3
Calculator.multiply(5);
Calculator.divide(2);
console.log(Calculator.getResult()); //7.5
