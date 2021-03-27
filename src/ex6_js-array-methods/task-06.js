function analogReduce(array, callback, initialValue) {
    const result = initialValue; 
    
    array.forEach(elem => {
        if(initialValue) {
            result = callback.call(result, elem, i, array);
        }
       
        if(!initialValue) {
            if(i === 0) {
               result = elem 
            }

            if(!i === 0) {
               result = callback.call(result, elem, i, array);
            }
            
        }
    });

    return result;
}

module.exports = analogReduce;
