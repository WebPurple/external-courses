function deepClone(someObject){
    var objectClone;

    Object.keys(someObject).forEach(key){
        if (typeof(someObject[key]) !== 'object'){
            objectClone[key] = someObject[key];
        } else {
            objectClone[key] = deepClone(someObject[key])
        }
    };
    return objectClone;
}

module.exports = deepClone;
