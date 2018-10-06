function sortArray(arr) {
    var evenNumbersCount = 0;
    var unevenNumbersCount = 0;
    var zeroCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroCount++;
        } else if (arr[i] % 2 === 0 && arr[i] !== null) {
            evenNumbersCount++;
        }
        else if (arr[i] % 2 !== 0) {
           unevenNumbersCount++;
        } 
    }
    return ([evenNumbersCount, unevenNumbersCount, zeroCount]);
}
module.exports = sortArray;