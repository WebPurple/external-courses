'use strict'

function cutStr(str, tresholdLength) {
  return str.length > tresholdLength ? str.slice(0, tresholdLength - 1) + '…' : str;
}

module.exports = cutStr;