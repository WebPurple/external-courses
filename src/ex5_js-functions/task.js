function calculator() {
    let result = 0;

    const add = (v) => { 
        if (v !== undefined) {
            result = result + v;
        }

        return add;
    };
    const subtract = (v) => { 
        if (v !== undefined) {
            result = result - v;
        }

        return subtract;
    };
    const divide = (v) => { 
        if (v !== undefined) {
            result = result / v;
        }

        return divide;
    };
    const multiply = (v) => { 
        if (v !== undefined) {
            result = result * v;
        }

        return multiply;
    };
    const getResult = () => result;
    const reset = () => (result = 0);

    return {
       add,
       subtract, 
       divide,
       multiply,
       getResult,
       reset,
    }
};

let testCalculator = calculator();
module.exports = testCalculator;
