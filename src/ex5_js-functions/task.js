function Calculator() {
  this.presentValue = 0;

  this.getResult = () => {
    return this.presentValue;
  };

  this.reset = () => {
    this.presentValue = 0;
  };

  this.add = (a = 0) => {
    this.presentValue += a;

    return this.add;
  };

  this.subtract = (a = 0) => {
    this.presentValue -= a;

    return this.subtract;
  };

  this.divide = (a = 1) => {
    this.presentValue /= a;

    return this.divide;
  };

  this.multiply = (a = 1) => {
    this.presentValue *= a;

    return this.multiply;
  };
}

const calc = new Calculator();

module.exports = calc;
