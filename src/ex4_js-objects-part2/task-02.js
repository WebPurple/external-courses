'use strict'

function createObjWithoutPrototipe() {
  return Object.create(null);
}

module.exports = createObjWithoutPrototipe;
