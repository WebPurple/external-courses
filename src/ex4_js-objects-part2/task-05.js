'use strict'

function isFirstStrInSecondStr(firstStr, secondStr) {
  return secondStr.search(firstStr) ? true : false; // разобраться как работает, потому что возвращает -1, а это true
}

module.exports = isFirstStrInSecondStr;
