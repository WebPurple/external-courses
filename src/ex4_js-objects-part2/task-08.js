'use strict'

function toLowerCamelCase(str) {
  let resultStr = str.split(' ')
                     .map( elem => {
                       let tempStr = elem.toLowerCase();
                       return tempStr.charAt(0).toUpperCase() + tempStr.slice(1);
                     })
                     .join('');

  return resultStr.charAt(0).toLowerCase() + resultStr.slice(1);
}

module.exports = toLowerCamelCase;