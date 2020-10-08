let Calculator = 
{
  state : 0,

  add: function(num) {
    if (!isNaN(num)) {    
      Calculator.state += num;
    }
    
    return Calculator.add;
  },

  multiply: function(num) {
    if (!isNaN(num)) {    
      Calculator.state *= num;
    }
    
    return Calculator.multiply;
  },

  subtract: function(num) {
    if (!isNaN(num)) {    
      Calculator.state -= num;
    }
    
    return Calculator.subtract;
  },

  divide: function(num) {
    if (!isNaN(num)) {    
      Calculator.state /= num;
    }
    
    return Calculator.divide;
  },

  getResult: function() {
    return this.state;
  },
  
  reset: function() {
    this.state = 0;
  },
}

module.exports = Calculator;
