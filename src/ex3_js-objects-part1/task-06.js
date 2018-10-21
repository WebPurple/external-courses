'use strict'
function deepClone(ob) {
  var newClone = {};
  var newArr =[];
  var key;  
  var i;

  for (key in ob) {
      
    if (ob[key] === null) {
        
      newClone[key] = null;
        
    } else if (typeof ob[key] === 'object' && !Array.isArray(ob[key])) {
        
      newClone[key] = deepClone(ob[key]);
       
    } else if (Array.isArray(ob[key])) {
      
      for (i = 0; i < ob[key].length; i++) {
         
        if (typeof ob[key][i] === 'object' && ob[key][i] !== null) {
           
          newArr[i] = deepClone(ob[key][i]);
           
        } else {
           
          newArr[i] = ob[key][i];
        }
         
        newClone[key] = newArr;
      }
      
    } else {
        
      newClone[key] = ob[key];
    }
  }

  return newClone;
}
module.exports = deepClone;