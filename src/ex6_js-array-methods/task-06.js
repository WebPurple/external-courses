function analogReduce(array, callback, initialValue) {
    let result = 0; 

    if (initialValue) {
        result = initialValue;

        array.forEach(elem => {
            result = callback.call(null, result, elem, array.indexOf(elem), array);
        });
    }

    if (!initialValue) {
       array.forEach(elem => {
            result = callback.call(null, result, elem, array.indexOf(elem), array); 
        });
    }
    
    return result;
}

module.exports = analogReduce;
