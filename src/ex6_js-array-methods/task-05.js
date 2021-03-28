function analogMap(array, callback, thisArg) {
    const filteredArray = [];

    for (let item of array) {
        filteredArray.push(callback.call(thisArg, item, array.indexOf(item), array)) 
    } 
    
    return filteredArray;  
}

module.exports = analogMap;
