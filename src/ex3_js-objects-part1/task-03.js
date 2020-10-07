"use strict"

function checkFieldInObj(string, obj){
  if (string in obj) {
    return true;
  }

  return false;
}

module.exports = checkFieldInObj;
