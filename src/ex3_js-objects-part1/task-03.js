'use strict';

function hasProperty(keyName, someObject){
    var result = Object.keys(someObject).includes(keyName);
    return result;
}

module.exports = hasProperty;
