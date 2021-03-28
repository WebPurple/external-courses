function analogMap(array, callback) {
    const filteredArray = [];

    array.forEach(item => {
        filteredArray.push(callback.call(item, array.indexOf(item), array)) 
    }); 
    
    return filteredArray;  
}

module.exports = analogMap;
