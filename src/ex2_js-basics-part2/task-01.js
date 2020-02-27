'use strict'

function isStringOrNumber(a) {
  if (Number.isNaN(a)) {
    return undefined
  }
  if (typeof(a) === 'string' || typeof(a) === 'number') {
    return typeof(a);
  }
  return undefined;
}

module.exports = isStringOrNumber;
