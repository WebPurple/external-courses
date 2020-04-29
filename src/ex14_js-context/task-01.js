class Calculator {
    constructor() {
        this.result = 0;
    }

    add(x = 0) {
        this.result += x;
        return this;
    }
    subtract(x = 0) {
        this.result -= x;
        return this;
    }
    divide(x = 1) {
        this.result /= x;
        return this;
    }
    multiply(x = 1) {
        this.result *= x;
        return this;
    }
    getResult() {
        return this.result;
    }
    reset() {
        this.result = 0;
        return this;
    }
    setState(x = 0){
        this.result = x;
        return this;
    }
    fetchData(callback){
        this.result = 500;
        setTimeout(callback, 1000, this.result);
        return this;
    }
}
module.exports = new Calculator();