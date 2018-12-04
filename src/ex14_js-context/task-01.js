var calculator = function() { 
    result = 0; 
    return { 
    add: function(variable) { 
    if (arguments.length === 0) { 
    variable = 0; 
    } 
    var currentSum = result + variable; 
    result = currentSum; 
    return this; 
    }, 
    subtract: function(variable) { 
    if (arguments.length === 0) { 
    variable = 0; 
    } 
    var currentSub = result - variable; 
    result = currentSub; 
    return this; 
    }, 
    divide: function(variable) { 
    if (arguments.length === 0) { 
    variable = 1; 
    } 
    var currentDiv = result / variable; 
    result = currentDiv; 
    return this; 
    }, 
    multiply: function(variable) { 
    if (arguments.length === 0) { 
    variable = 1; 
    } 
    var currentMult = result * variable; 
    result = currentMult; 
    return this; 
    }, 
    getResult: function() { 
    console.log(result); 
    return this; 
    }, 
    resetResult: function() { 
    result = 0; 
    return this; 
    }, 
    setState: function(num) { 
    result = num; 
    return this; 
    }, 
    fetch: function() { 
    result = 500; 
    
    }} 
    
    } 
    
    function fetchData(callback) { 
    setTimeout(function(){callback();
    calculator.getResult()},2000); 
    }
    
    var calculator=calculator(); 
    calculator.add(5) 
    .subtract(10) 
    .multiply(-10) 
    .divide(4) 
    .resetResult() 
    .getResult() 
    .setState(777) 
    .getResult() 
    fetchData(calculator.fetch)