function analogMap(array, callback) {
    const filteredArray = [];

    for(item of array) {
        filteredArray.push(callback.call(item, array.indexOf(item), array)) 
    } 
    
    return filteredArray;  
}

module.exports = analogMap;
