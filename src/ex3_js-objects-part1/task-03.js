function checkPropertyInObject(property, object) {
  for (let key in object) {
    if (property === key && object.hasOwnProperty(key)) {
      return true;
    }
  }
  return false;
}

module.exports = checkPropertyInObject;
