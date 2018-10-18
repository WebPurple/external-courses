'use strict'

function calculator(){
    var result = 0;
    
    var addition = function(number){
        if (number !== undefined){
            result += number;
        };
        return addition;
    };

    var substraction = function(number){
        if (number !== undefined){
            result -= number;
        };
        return substraction;
    }

    var division = function(number){
        if (number !== undefined){
            result /= number;
        };
        return division;
    };

    var multiplication = function(number){
        if (number !== undefined){
            result *= number;
        };
        return multiplication;
    }

    return {

        getResult: function(){
            return result;
        },    
        
        reset: function(){
            result = 0;
        },

        add: addition,

        substract: substraction,

        divide: division,

        multiply: multiplication
    }   
}

module.exports = calculator;
let c = calculator();

c.add(1);
console.log(calculator.getResult());
c.multiply(2);
console.log(c.getResult());
c.multiply(2);
console.log(c.getResult());