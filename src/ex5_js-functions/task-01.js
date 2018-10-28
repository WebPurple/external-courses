var calculator = new Calculator;
function Calculator () { 
    var value = 0 
    function add ( a ){ 
    if ( a !== null ){ 
    value += a; 
    } 
    return add; 
    } 
    function subtract ( a ){ 
    if (a !== null ){ 
    value -= a; 
    } 
    return subtract; 
    } 
    function divide ( a ) { 
    if (a !== null ){ 
    value /= a; 
    } 
    return divide; 
    } 
    function multiply ( a ){ 
    if (a !== null ){ 
    value *= a; 
    } 
    return multiply; 
    } 
    function getResult (){ 
    return value; 
    } 
    function reset (){ 
    value = 0; 
    } 
    return {getResult, multiply, divide, add, subtract,reset}; 
    }; 
    calculator.add(2)(2); 
    calculator.subtract(2); 
    console.log(calculator.getResult()) 
    calculator.reset(); 
    console.log(calculator.getResult());