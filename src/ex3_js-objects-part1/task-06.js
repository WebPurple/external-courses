"use strict"

function cloneFactory(objToClone) {
  let clonedObj = {};
  
  for(const i in objToClone) {
    if (Array.isArray(objToClone[i])) {
      let clonedArray = [];

      for (let j = 0; j < objToClone[i].length; ++j){
        if (typeof objToClone[i][j] === 'object') {
          clonedArray.push(cloneFactory(objToClone[i][j]));
        } else {
          clonedArray.push(objToClone[i][j]);
        }
      }

      clonedObj[i] = clonedArray; 

    } else if (typeof objToClone[i] === 'object') {
      clonedObj[i] = cloneFactory(objToClone[i]);
    } else {
      clonedObj[i] = objToClone[i];
    }
  }
  
  return clonedObj;
}

module.exports = cloneFactory;
