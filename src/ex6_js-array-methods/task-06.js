function analogReduce(array, callback, initialValue) {
    let result = 0; 
    
    for (let elem of array) {
        const index = array.indexOf(elem);

        if (arguments === 3 && index === 0) {
            result = initialValue;
        }

        if (arguments === 3 && index > 0) {
            result += callback.call(result, elem, index, array);
        }
       
        if (arguments === 2 && index === 0) {
            result === elem;
        }
            
        if (arguments === 2 && index > 0) {
            result += callback.call(result, elem, index, array);
        }        
    }

    return result;
}

module.exports = analogReduce;
