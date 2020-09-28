module.exports = function maxValueOfArray (myArray) {
    let result = Math.max.apply(null, myArray);
    return result;
}
