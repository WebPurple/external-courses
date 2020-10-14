function calc(value = 0) {
  let compute = 0;

  this.add = function (value = 0) {
    return compute += value
  }

  this.subtract = function (value = 0) {
    return compute -= value
  }

  this.divide = function (value = 0) {
    return compute /= value
  }

  this.multiply = function (value = 0) {
    return compute *= value
  }

  this.getResult = function (){
    return console.log(compute)
  }

  this.reset = function () {
    return compute = 0
  }

}

const Calculator = new calc();

Calculator.add(2);
Calculator.add(2);
Calculator.subtract(2);
console.log(Calculator.add(2))


// class Calculator {
//   constructor(value = 0) {
//     this.value = value;
//   }
//
//   add(value) {
//     return value * 2
//   }
//
//   subtract() {
//
//   }
//
//   divide() {
//
//   }
//
//   multiply() {
//
//   }
//
//   getResult() {
//
//   }
//
//   reset() {
//
//   }
// }
//
// const calculator = new Calculator();
// console.log(calculator);
// console.log(calculator.add(2));
