'use strict'

function capitalizeFirst(someString){
    let result = (someString[0].toUpperCase() + someString.substring(1)); 
    return result;
}

module.exports = capitalizeFirst;
