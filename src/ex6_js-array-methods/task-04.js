function analogFilter(array, callback) {
    array.forEach(elem => {
        if (callback.call(elem, array[elem], array)) {
            const filteredArray = []; 
            
            filteredArray.push(elem);

            return filteredArray;    
        }
    }); 
}

module.exports = analogFilter;
