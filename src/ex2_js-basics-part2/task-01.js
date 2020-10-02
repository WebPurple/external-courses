"use strict"

function whichType(inputParams) {
    let type = typeof(inputParams);
    
    if (type === 'string' || type === 'number' && !isNaN(inputParams)) {
      if (inputParams === null) {
        return undefined;
      }
      return type;
    }

    return undefined;
}

module.exports = whichType;
