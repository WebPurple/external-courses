"use strict"

function whichType(inputParams) {
    let type = typeof(inputParams);
    if (type === 'string') {
      return type;
    }
    if (type === 'number') {
      if (isNaN(inputParams)) {
        return undefined;
      }

       return type;
    }

    return undefined;
}

module.exports = whichType;
