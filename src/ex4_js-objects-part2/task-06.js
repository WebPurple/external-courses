'use strict'

function makeAllFirstCharUpperCase(str) {
  return str.split(' ')
            .map( elem => {
              return elem.charAt(0).toUpperCase() + elem.slice(1)
            })
            .join(" ");
}

module.exports = makeAllFirstCharUpperCase;
