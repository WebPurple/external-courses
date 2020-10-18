class MyConstructor {
  constructor() {
    this.result = 0;
    
    this.add = (el) => {
      if (el !== undefined) {
        this.result += el;
      }

      return this.add;
    };
    
    this.subtract = (el) => {
      if (el !== undefined) {
        this.result -= el;
      }

      return this.subtract;
    };
    
    this.divide = (el) => {
      if (el !== undefined) {
        this.result /= el;
      }

      return this.divide;
    };
    
    this.multiply = (el) => {
      if (el !== undefined) {
        this.result *= el;
      }

      return this.multiply;
    };
    
    this.getResult = () => {
      return this.result;
    };
    
    this.reset = () => {
      this.result = 0;

      return this.result;
    };
  }
}

const newConstructor = new MyConstructor();
module.exports = newConstructor;
