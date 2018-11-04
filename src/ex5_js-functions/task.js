function calculatorF() {
    var result = 0;

    return {
        add: function(num) {
            if (arguments.length === 0) {
                return function a() {
                    return a;
                }
            }
            result += num;
            if (arguments.length === 1) {
                return function addf(num1) {
                    result += num1;
                    return addf;
                }
            }
        },
        substract: function(num) {
            if (arguments.length === 0) {
                return function a() {
                    return a;
                }
            }
            result -= num;
            if (arguments.length === 1) {
                return function subf(num1) {
                    result -= num1;
                    return subf;
                }
            }
        },
        divide: function(num) {
            result /= num;
            if (arguments.length === 1) {
                return function divf(num1) {
                    result /= num1;
                    return divf;
                }
            }
        },
        multiply: function(num) {
            result *= num;
            if (arguments.length === 1) {
                return function mulf(num1) {
                    result *= num1;
                    return mulf;
                }
            }
        },
        reset: function() {
            return result = 0;
        },
        getResult: function() {
            return result;
        }
    }
};

var Calculator = calculatorF();

Calculator.add(5)(5)(5)(5);
console.log(Calculator.getResult());
Calculator.substract(10);
console.log(Calculator.getResult());