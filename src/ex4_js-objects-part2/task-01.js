'use strict'

function checkPropInObj(prop, obj) {
  let objPrototip = Object.getPrototypeOf(obj);

  return objPrototip.hasOwnProperty(prop) ? obj[prop] : undefined;
}

module.exports = checkPropInObj;
