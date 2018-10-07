'use strict';

function getType(a){
    var variableType = typeof(a);
    var result = 'undefined';
    if (variableType === 'string'){
        result = variableType;
    } else if (variableType === 'number'){
        result = variableType;
    }

    return result;
}
