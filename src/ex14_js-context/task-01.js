function Calculator() {
    this.value = 0;

    this.add = (number = 0) => {
        this.value += number;
        return this;
    }

    this.subtract = (number = 0) => {
        this.value -= number;
        return this;
    }

    this.divide = (number = 1) => {
        this.value /= number;
        return this;
    }

    this.multiply = (number = 1) => {
        this.value *= number;      
        return this;
    }

    this.getResult = () => {
        return this.value;  
    }

    this.reset = () => {
        this.value = 0;
    } 

    this.setState = (initialValue) => {
        this.value = initialValue;
    }

    this.fetchData = (callback) => {
       return new Promise(callback);
       
        
    }
}

let calculator = new Calculator();

module.exports =  calculator;
