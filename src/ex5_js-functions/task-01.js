'use strict'
var calc = calculator();
function calculator(){
    var result = 0;
    
    return {

        getResult: function(){
            return result;
        },    
        
        reset: function(){
            result = 0;
        },

        add: function add(number){
            if (number !== undefined){
                result += number;
            };
            return add;
        },

        subtract: function subtract(number){
            if (number !== undefined){
                result -= number;
            };
            return subtract;
        },

        divide: function divide(number){
            if (number !== undefined){
                result /= number;
            };
            return divide;
        },

        multiply: function multiply(number){
            if (number !== undefined){
                result *= number;
            };
            return multiply;
        }
    }   
}

module.exports = calc;
