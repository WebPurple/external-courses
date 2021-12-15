class Calculator {
  constructor() {
    this.currentValue = 0;
  }

  setState(a) {
    this.currentValue = a;
  }

  getResult() {
    console.log(this.currentValue);

    return this;
  }

  reset() {
    this.currentValue = 0;

    return this;
  }

  add(addValue = 0) {
    this.currentValue += addValue;

    return this;
  }

  subtract(subtractValue = 0) {
    this.currentValue += subtractValue;

    return this;
  }

  divide(divideValue) {
    this.currentValue /= divideValue;

    return this;
  }

  multiply(multiplyValue = 0) {
    this.currentValue *= multiplyValue;

    return this;
  }

  callback() {
    this.setState(500);

    return this;
  }
}

const calculator = new Calculator();

module.exports = calculator;
