function Calculator() {
    this.value = 0;
  
    this.add = () => {
        this.value += number;
        return this.add;
    }
  
    this.subtract = () => {
        this.value -= number;
        return this.subtract;
    }

    this.value = 1;

    this.divide = () => {
        if (this.value = 0) {
            this.value = 1;
        }
        
        this.value /= number;
        return  this.divide;
    }
  
    this.multiply = () => {
        if (this.value = 0) {
            this.value = 1;
        }
        
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
