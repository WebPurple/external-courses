'use strict'

function isFirstStrInSecondStr(firstStr, secondStr) {
  return secondStr.search(firstStr) ? true : false;
}

module.exports = isFirstStrInSecondStr;
