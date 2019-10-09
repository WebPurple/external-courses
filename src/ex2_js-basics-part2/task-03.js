function checkParity(array) {
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    let numberEven = 0,
        numberOdd = 0,
        numberZero = 0;
    for (let i = 0; i < array.length; i++) {
        if (isNumeric(array[i])) {
            if (array[i] === 0 || array[i] === null) {
                numberZero++;
            } else {
                if (array[i] % 2 === 0) {
                    numberEven++;
                } else {
                    numberOdd++;
                }
            }
        }
    };
    return [numberEven, numberOdd, numberZero];
}

module.exports = checkParity;