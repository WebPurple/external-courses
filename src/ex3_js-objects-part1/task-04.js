'use strict'
function newKeys(str, ob) {
  
    if (str in ob) {
    
      return ob;
    } 
      ob[str] = 'new';
      return ob;
}
module.exports = newKeys;