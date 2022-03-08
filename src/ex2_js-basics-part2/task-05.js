function maxElement(array) {
    let element = 0;
    for (let index = 0; index < array.length; index++) {
        if (array[index] > element) { 
            element = array[index];
        } 
    }
    return element;
}
module.exports = checkingIdenticalElements;