"use strict"

function addNewFieldInObjIfDoesNotExist(field, obj){
  if (!(field in obj)) {
    obj[field] = 'new'; // eslint-disable-line no-param-reassign
  }
  
  return obj;
}

module.exports = addNewFieldInObjIfDoesNotExist;
