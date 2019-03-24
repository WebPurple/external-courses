Calculator = {

    stored: 0,

    add: function add(a) {
        if (a !== undefined) {
            Calculator.stored += a;
        }
        return add;
    },

    subtract: function subtract(a) {
        if (a !== undefined) {
            Calculator.stored -= a;
        }
        return Calculator.subtract;
    },

    divide: function divide(a) {
        if (a !== undefined) {
            if (a !== 0) {
                Calculator.stored /= a;
            } else {
                Calculator.stored = NaN;
            }
        }
        return Calculator.divide;
    },

    multiply: function multiply(a) {
        if (a !== undefined) {
            Calculator.stored *= a;
        }
        return Calculator.multiply;
    },

    getResult: function getResult() {
        return Calculator.stored;
    },

    reset: function reset() {
        Calculator.stored = 0;
    }
}

module.exports = Calculator;
