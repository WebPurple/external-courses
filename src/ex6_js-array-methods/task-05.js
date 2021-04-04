function analogMap(array, callback, thisArg) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        filteredArray.push(callback.call(thisArg, array[i], i, array)) 
    } 
    
    return filteredArray;  
}

module.exports = analogMap;
