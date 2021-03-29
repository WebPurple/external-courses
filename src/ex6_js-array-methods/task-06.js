function analogReduce(array, callback, initialValue) {
    let result = 0; 

    if (arguments.length === 3) {
        result = initialValue;

        array.forEach(elem => {
            result = callback.call(null, result, elem, array.indexOf(elem), array);
        });
    }

    if (arguments.length === 2) {
       array.forEach(elem => {
            result = callback.call(null, result, elem, array.indexOf(elem), array); 
        });
    }
    
    return result;
}

module.exports = analogReduce;
