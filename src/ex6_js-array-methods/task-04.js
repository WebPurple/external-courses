function analogFilter(array, callback, thisArg) {
    const filteredArray = []; 

    for (let elem of array) {
        if (callback.call(thisArg, elem, array.indexOf(elem), array)) { 
            
            filteredArray.push(elem);    
        }
    }
     
    return filteredArray; 
}

module.exports = analogFilter;
