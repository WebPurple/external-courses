"use strict"

function logAllKeysAndValues(obj) {
  for (let key in obj) {
    console.log(key + ': ' + obj[key]);
  }
}

module.exports = logAllKeysAndValues;
