function Calculator() {
  this.presentValue = 0;

  this.getResult = () => {
    return this.presentValue;
  };

  this.reset = () => {
    this.presentValue = 0;
  };

  this.add = (a) => {
    if (!isNaN(a)) {
      this.presentValue += a;
    }
    return this.add;
  };

  this.subtract = (a) => {
    if (!isNaN(a)) {
      this.presentValue -= a;
    }
    return this.subtract;
  };

  this.divide = (a) => {
    if (!isNaN(a)) {
      this.presentValue /= a;
    }
    return this.divide;
  };

  this.multiply = (a) => {
    if (!isNaN(a)) {
      this.presentValue *= a;
    }
    return this.multiply;
  };
}

let calc = new Calculator();

module.exports = calc;
