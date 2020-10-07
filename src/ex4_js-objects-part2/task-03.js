'use strict'

function removeFirstAndLastSpace(str) {
  let result = str;

  if (result[0] === ' ') {
      result = result.slice(1);
  }

  if (result[result.length - 1] === ' ') {
      result = result.slice(0, result.length - 1);
  }

  return result;
}

module.exports = removeFirstAndLastSpace;
