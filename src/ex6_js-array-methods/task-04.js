function analogFilter(array, callback, thisArg) {
    const filteredArray = []; 

    for (let i = 0; i < array.length; i++) {
        if (callback.call(thisArg, array[i], i, array)) { 
            filteredArray.push(array[i]);    
        }
    }
     
    return filteredArray; 
}

module.exports = analogFilter;
