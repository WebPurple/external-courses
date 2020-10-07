'use strict'

function countChars(str) {
  let result = {};
  str.split('')
     .map( elem => {
      result[elem] = result[elem] ? 1 + result[elem] : 1;
    })
    
    for (const i in result) {
      console.log(i);
    }
}

module.exports = countChars;
