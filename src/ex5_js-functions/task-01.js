class Calculator {

  constructor(compute = 0) {
    this.compute = 0;

    this.add = (value = 0) => {
      this.compute += value;

      return this.add;
    }

    this.subtract = (value = 0) => {
      this.compute -= value;

      return this.subtract;
    }

    this.divide = (value = 0) => {
      this.compute /= value;

      return this.divide;
    }

    this.multiply = (value = 0) => {
      this.compute *= value;

      return this.multiply;
    }
  }

  getResult() {
    return this.compute;
  }

  reset() {
    this.compute = 0;

    return this.compute;
  }
}

const сalculator = new Calculator();
