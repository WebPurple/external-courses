function Calculator() {
    this.value = 0;
  
    this.add = (number = 0) => {
        this.value += number;
        return this.add;
    }
  
    this.subtract = (number = 0) => {
        this.value -= number;
        return this.subtract;
    }

    this.value = 1;

    this.divide = (number = 1) => {
        this.value /= number;
        return  this.divide;
    }
  
    this.multiply = (number = 1) => {
        this.value *= number;   
        return this.multiply;
    }
  
    this.getResult = () => {
        return this.value;  
    }
  
    this.reset = () => {
        return this.value = 0;
    } 
}

let calculator = new Calculator();

module.exports =  calculator;
