module.exports = checkParity;

function checkParity(massive) {
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    let numberEven = 0,
        numberOdd = 0,
        numberZero = 0,
        result = [];
    for (let i = 0; i < massive.length; i++) {
        if (isNumeric(massive[i])) {
            if (massive[i] === 0 || massive[i] === null) {
                numberZero++;
            } else {
                if (massive[i] % 2 === 0) {
                    numberEven++;
                } else {
                    numberOdd++;
                }
            }
        }
    };
    result.push(numberEven);
    result.push(numberOdd);
    result.push(numberZero);
    return result;
}