function printArrayElements(array) {
    for (var i = 0; i < array.length; i++) {
        console.log('Element № ' + i + ': ' + array[i]);
    }
    console.log('Number of array elements: ' + array.length)
}

module.exports = printArrayElements;