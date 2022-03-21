function checkPropertyInObject(property, object) {
  for (const key in object) {
    if (property === key && object.hasOwnProperty(key)) {
      return true;
    }
  }
  return false;
}

module.exports = checkPropertyInObject;
