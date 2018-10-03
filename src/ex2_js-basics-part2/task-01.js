'use strict';

function getType(a){
    var variableType = typeof(a);

    if (variableType === 'string' || variableType === 'number' ){
        var result = variableType;
    }
    
    return result;
}

module.exports = getType;