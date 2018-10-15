'use strict';
function makeClone(obj) {
  var objNew = {};
  var key;
  var i;
  for (key in obj) {
    if (Array.isArray(obj[key])) {
      objNew[key] = [];
      for (i = 0; i < obj[key].length; i++) {
        objNew[key][i] = obj[key][i];
      }
    } else if (typeof obj[key] === 'object') {
      objNew[key] = makeClone(obj[key]);
    } else {
      objNew[key] = obj[key];
    }
  }
  return objNew;
}
module.exports = makeClone;
