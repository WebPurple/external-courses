var Calculator = {
    getResult: 0,
    reset: function() {
        return Calculator.getResult = 0;
    },
    'subtract': function() {
for (var i = 0; i<arguments.length; i++) {
        Calculator.getResult  -= arguments[i];
} return Calculator.getResult;
        }, 
        'add': function() {
for (var i = 0; i<arguments.length; i++) {
        Calculator.getResult += arguments[i];
} return Calculator.getResult;
    },
    'divide': function() {
for (var i = 0; i<arguments.length; i++) {
    Calculator.getResult  /= arguments[i];
} return Calculator.getResult;
    },
    'multiply': function() {
for (var i = 0; i<arguments.length; i++) {
        Calculator.getResult *= arguments[i];
} return Calculator.getResult;   
    },
    }