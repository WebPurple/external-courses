'use strict'

function getRandom(min, max){
    return Math.round(Math.random()*(max-min) + min);
}

module.exports = getRandom;
