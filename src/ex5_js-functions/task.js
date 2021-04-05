calculator = {
    result : 0,
    add : function(number) {
        if (typeof(number) == "undefined") {
            return this.add; 
        }

        calculator.result = calculator.result + number;

        return this.add;
    },
    subtract : function(number) {
        if (typeof(number) == "undefined") {
            return this.subtract; 
        }

        calculator.result = calculator.result - number;

        return this.subtract;
    },
    divide : function(number) {
        if (typeof(number) == "undefined") {
            return this.divide; 
        }

        calculator.result = calculator.result / number;

        return this.divide;
    },
    multiply : function(number) {
        if (typeof(number) == "undefined") {
            return this.multiply; 
        }

        calculator.result = calculator.result * number;

        return this.multiply;
    },
    getResult : function() {
        return this.result;
    },
    reset : function() {
        this.result = 0;
        return this.result;
    }
};

calculator.add(1)(1);
console.log(calculator.getResult())
module.exports = calculator;
 