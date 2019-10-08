function printArray(array) {
    array.forEach(function(item) {
        console.log(item);
    });
    console.log("Число элементов : " + array.length);
}
module.exports = printArray;