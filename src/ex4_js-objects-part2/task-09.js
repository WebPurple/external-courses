'use strict'

function insertStrInAnotherOnPosition(str, insertStr, pos) {
  let tempStr = str.split(' ');
  
  tempStr[pos] += ' ' + insertStr;

  return tempStr.join(' ');
}

module.exports = insertStrInAnotherOnPosition;
