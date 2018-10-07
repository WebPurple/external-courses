'use strict';

function getType(a){

    var variableType = typeof(a);
    var result = undefined;

    if (variableType === 'string' || variableType === 'number' ){
        result = variableType;
    }
    
    return result;
}

module.exports = getType;
