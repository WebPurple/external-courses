'use strict'

function randValueBetweenMinAndMax(max, min) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

module.exports = randValueBetweenMinAndMax;
