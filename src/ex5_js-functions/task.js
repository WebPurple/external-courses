let calculator = {
  result: 0,

  add: function (a) {
 
    if ( a !== undefined) {
      calculator.result = +calculator.result + (+a);
    } 
 
    return calculator.add;
  },

  subtract: function (a) {
 
    if ( a !== undefined) {
      calculator.result = +calculator.result - (+a);
    } 
 
    return calculator.subtract;
  },

  divide: function (a) {
 
    if ( a !== undefined) {
      calculator.result = +calculator.result / (+a);
    } 
 
    return calculator.divide;
  },

  multiply: function (a) {
 
    if ( a !== undefined) {
      calculator.result = +calculator.result * (+a);
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

// console.log("____________Add__________");
// console.log(calculator.add());
// console.log(calculator.getResult());
// console.log(calculator.add()(1)()(3));
// console.log(calculator.getResult());
// console.log("__________divide____________");
// console.log(calculator.getResult());
// console.log(calculator.divide(5)(1));
// console.log(calculator.getResult());
// console.log("__________multiply____________");
// console.log(calculator.getResult());
// console.log(calculator.multiply(2)(5));
// console.log(calculator.getResult());

// console.log("________subtract______________");
// console.log(calculator.getResult());
// console.log(calculator.subtract(1)(1));
// console.log(calculator.getResult());
// console.log("__________reset____________");
// console.log(calculator.getResult());
// console.log(calculator.reset());
// console.log(calculator.getResult());
// console.log("______________________");

module.exports = calculator;
