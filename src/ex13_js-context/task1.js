function CreateCalculator() {
  let result = 0;
  return {
    // +++++add+++++
    add(value) {
      if (isNaN(value)) {
        return this;
      }
      result += value;
      return this;
    },
    // -----subtract---—
    subtract(value) {
      if (isNaN(value)) {
        return this;
      }
      result -= value;
      return this;
    },
    //* ****multiply******
    multiply(value) {
      if (isNaN(value)) {
        return this;
      }
      result *= value;
      return this;
    },
    // :::::divide:::::
    divide(value) {
      if (isNaN(value) || value === 0 || value === Infinity) {
        return this;
      }
      result /= value;
      return this;
    },
    // .....getResult.....
    getResult() {
      return result;
    },
    // .....setState.....
    setState(value) {
      if (value) {
        result = value;
      }
      return this;
    },
    // .....fetchData.....
    fetchData(callback) {
      setTimeout(() => {
        callback(500);
        result = 500;
      }, 2000);
      return this;
    },
    // .....reset.....
    reset() {
      result = 0;
      return this;
    },
  };
}

const Calculator = CreateCalculator();
module.exports = Calculator;
