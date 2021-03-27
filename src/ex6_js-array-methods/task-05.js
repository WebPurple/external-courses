function analogMap(array, callback) {
    const filteredArray = [];

    array.forEach(item => {
        filteredArray.push(callback.call(item, i, array)) 
    }); 
    
    return filteredArray;  
}

module.exports = analogMap;
