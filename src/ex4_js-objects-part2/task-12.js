function getRoundedNumber(firstNum, secondNum) {
    return parseInt((firstNum + secondNum).toFixed(3));
}

module.exports = getRoundedNumber;
