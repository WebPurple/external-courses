function analogFilter(array, callback) {
    for(elem of array) {
        if (callback.call(elem, array.indexOf(elem), array)) {
            const filteredArray = []; 
            
            filteredArray.push(elem);

            return filteredArray;    
        }
    } 
}

module.exports = analogFilter;
