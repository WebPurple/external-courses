'use strict'

function isFirstStrInSecondStr(firstStr, secondStr) {
  return firstStr.search(secondStr) !== - 1;
}

module.exports = isFirstStrInSecondStr;
