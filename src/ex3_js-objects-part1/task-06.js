"use strict"

function cloneFactory(objToClone) {
  let clonedObj = {};
  
  for(const i in objToClone) {
    if (objToClone[i] instanceof Object && !(objToClone[i] instanceof Array)) {
      clonedObj[i] = cloneFactory(objToClone[i]);
      continue;
    }
    clonedObj[i] = JSON.parse(JSON.stringify(objToClone[i]));
  }
  return clonedObj;
}

module.exports = cloneFactory;
