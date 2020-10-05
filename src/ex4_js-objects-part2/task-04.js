'use strict'

function makeFirstCharUpperCase(str) {
  return typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : undefined;
}

module.exports = makeFirstCharUpperCase;
