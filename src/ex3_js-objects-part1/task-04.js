
function hasProperty(keyName, someObject){
    if(!Object.keys(someObject).includes(keyName)){
        someObject[keyName] = 'new';
    }
    return someObject;
}

module.exports = hasProperty;
