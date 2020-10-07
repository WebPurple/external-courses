'use strict'

const PRECISION_VALUE = 3;

function sumTwoNumAndLogWithPrecision3(num1, num2) {
  return +(num1 + num2).toFixed(PRECISION_VALUE);
}

module.exports = sumTwoNumAndLogWithPrecision3;
