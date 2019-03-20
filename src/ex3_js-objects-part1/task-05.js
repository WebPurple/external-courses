function getCopyObject(object) {

  var newObj = {};
  for (var key in object) {
    if (object.hasOwnProperty(key)) {
        newObj[key] = object[key];
    }
  }
  return newObj;
}

module.exports = getCopyObject;