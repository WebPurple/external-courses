'use strict'

function removeFirstAndLastSpace(str) {
  return typeof str === 'string' ? str.trim() : undefined;
}

module.exports = removeFirstAndLastSpace;
