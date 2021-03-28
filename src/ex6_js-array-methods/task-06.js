function analogReduce(array, callback, initialValue) {
    let result = 0; 
    
    for (let elem of array) {
        const index = array.indexOf(elem);

        if (initialValue && index === 0) {
            result = initialValue;
        }

        if (initialValue && index > 0) {
            result += callback.call(result, elem, index, array);
        }
       
        if (!initialValue && index === 0) {
            result === elem;
        }
            
        if (!initialValue && index > 0) {
               result += callback.call(result, elem, index, array);
        }        
    }

    return result;
}

module.exports = analogReduce;
