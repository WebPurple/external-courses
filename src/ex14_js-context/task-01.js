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
        return this;
    } 

    this.setState = (initialValue = this.value) => {
        this.value = initialValue;
        return this;
    }

    this.fetchData = (callback) => {
        setTimeout(() => {
            this.value = 500;
            callback(this.value);
        }, 200);
    }
}

let calculator = new Calculator();

module.exports =  calculator;
