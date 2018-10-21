'use strict'
function copyObj(ob) {
  var copyOb = {};
  var key; 
    for (key in ob) {
      
      copyOb[key] = ob[key];
    }
    
    return copyOb;
}
module.exports = copyObj;