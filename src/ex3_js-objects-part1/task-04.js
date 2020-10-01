"use strict"

function addNewFieldInObjIfDoesNotExist(field, obj){
  if (!obj.hasOwnProperty(field)) {
    obj[field] = 'new'; // eslint-disable-line no-param-reassign
  }

  return obj;
}

module.exports = addNewFieldInObjIfDoesNotExist;
