'use strict'

function randValueBetweenMinAndMax(max, min) {
  return Math.round(Math.random() * (max - min)) + min;
}

module.exports = randValueBetweenMinAndMax;
