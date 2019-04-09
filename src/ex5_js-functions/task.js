function Calc(){
  var res = 0;
  return {
    add: function add(x){
      if (!isNaN(x)) res += x;
      return add;
    },
    subtract: function sub(x){
      if (!isNaN(x)) res -= x;
      return sub;
    },
    divide: function div(x){
      if ((!isNaN(x)) && (x !== 0)) res /= x;
      return div;
    },
    multiply: function mult(x){
      if (!isNaN(x)) res *= x;
      return mult;
    },
    getResult: function (){
      return res;
    },
    reset: function (){
      res = 0;
      return res;
    }
  }
}
var Calculator = new Calc();
module.exports = Calculator;