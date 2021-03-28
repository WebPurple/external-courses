function analogReduce(array, callback, initialValue) {
    let result = initialValue; 
    
    for (let elem of array) {
        if (initialValue) {
            result = callback.call(result, elem, array.indexOf(elem), array);
        }
       
        if (!initialValue) {
            if (array.indexOf(elem) === 0) {
               result = elem 
            }

            if (!array.indexOf(elem) === 0) {
               result = callback.call(result, elem, array.indexOf(elem), array);
            }
        }
    }

    return result;
}

module.exports = analogReduce;
