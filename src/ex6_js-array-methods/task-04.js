function analogFilter(array, callback, thisArg) {
    for (let elem of array) {
        if (callback.call(thisArg, elem, array.indexOf(elem), array)) {
            const filteredArray = []; 
            
            filteredArray.push(elem);

            return filteredArray;    
        }
    } 
}

module.exports = analogFilter;
