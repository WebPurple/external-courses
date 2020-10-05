'use strict'

function randValueBetweenMinAndMax(max, min) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

module.exports = randValueBetweenMinAndMax;