module.exports = function equallyArray (myArray) {
    return new Set(myArray).size === 1;
}
