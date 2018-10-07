'use strict';

function hasProperty(keyName, someObject){
    var improvedObject = someObject;
    if(!Object.keys(improvedObject).includes(keyName)){
        improvedObject[keyName] = 'new';
    }
    return improvedObject;
}

module.exports = hasProperty;
