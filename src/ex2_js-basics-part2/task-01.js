'use strict';

function code(a){
    var variableType = typeof(a);
    var result = 'undefined';
    if (variableType === 'string'){
        result = 'string';
    } else if (variableType === 'number'){
        result = 'number';
    }
    return result;
}

console.log(code(2));
console.log(code('2'));