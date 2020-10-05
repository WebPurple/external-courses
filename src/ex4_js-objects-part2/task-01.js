'use strict'

function checkPropInObj(prop, obj) {
  let objPrototip = Object.getPrototypeOf(obj);

  return objPrototip.hasOwnProperty(prop) ? 1 : undefined;
}

module.exports = checkPropInObj;
