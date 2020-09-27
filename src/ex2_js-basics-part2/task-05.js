module.exports = function MaxValueOfArray (myArray) {
    let result = Math.max.apply(null, myArray);
    return result;
}