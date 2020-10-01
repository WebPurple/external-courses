"use strict"

function cloneObject(obj) {
  let newRef = Object.create(obj);

  return newRef;
}

module.exports = cloneObject;