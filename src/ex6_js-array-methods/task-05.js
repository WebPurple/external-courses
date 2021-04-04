function analogMap(array, callback, thisArg) {
    const filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        filteredArray.push(callback.call(thisArg, arr[i], i, array)) 
    } 
    
    return filteredArray;  
}

module.exports = analogMap;
