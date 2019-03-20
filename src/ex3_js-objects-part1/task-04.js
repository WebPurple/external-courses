function addMissingProperty(str, object) {
  var newObject = object;
  if (!(object.hasOwnProperty(str))) {
      newObject[str] = "new";
    return newObject;
  } return object
}

module.exports = addMissingProperty;