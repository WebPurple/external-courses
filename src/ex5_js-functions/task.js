calculator = {
    result : 0,
    add : function(number) {
        if (typeof(number) == "undefined") {
            return this.add; 
        }

        this.result = calculator.result + number;

        return this.add;
    },
    subtract : function(number) {
        if (typeof(number) == "undefined") {
            return this.subtract; 
        }

        this.result = calculator.result - number;

        return this.subtract;
    },
    divide : function(number) {
        if (typeof(number) == "undefined") {
            return this.divide; 
        }

        this.result = calculator.result / number;

        return this.divide;
    },
    multiply : function(number) {
        if (typeof(number) == "undefined") {
            return this.multiply; 
        }

        this.result = calculator.result * number;

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

module.exports = calculator;
 