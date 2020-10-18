function Calculator() {
  this.state = 0;

  this.add = (num = 0) => {
    if (!isNaN(num)) {    
      this.state += num;
    }
    
    return this.add;
  };

  this.multiply = (num = 1) => {
    if (!isNaN(num)) {    
      this.state *= num;
    }
    
    return this.multiply;
  };

  this.subtract = (num) => {
    if (!isNaN(num)) {    
      this.state -= num;
    }
    
    return this.subtract;
  };

  this.divide = (num = 1) => {
    if (!isNaN(num)) {    
      this.state /= num;
    }
    
    return this.divide;
  };

  this.getResult = () => {
    return this.state;
  };
  
  this.reset = () => {
    this.state = 0;
  };
}

module.exports = new Calculator();
