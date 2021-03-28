function analogMap(array, callback) {
    const filteredArray = [];

    for (let item of array) {
        filteredArray.push(callback.call(item, array.indexOf(item), array)) 
    } 
    
    return filteredArray;  
}

module.exports = analogMap;
