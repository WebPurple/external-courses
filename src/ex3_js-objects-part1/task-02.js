'use strict'
function viewObj(ob) {
  var key;

    for (key in ob) {
      
      console.log('Ключ: ' + key + ', значение:' + ob[key]);
    }
}
module.exports = viewObj;