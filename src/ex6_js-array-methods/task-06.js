function reduceSimilarity(array, callback, initialValue) {
    let currentValue = 0, i = 0;
    if (initialValue) {
        currentValue = initialValue
    } else {
        i++;
        currentValue = array[0]
    };
    for (i; i < array.length; i++) {
        currentValue = callback(currentValue, array[i], i, array);
    };
    return currentValue;
}

module.exports = reduceSimilarity;