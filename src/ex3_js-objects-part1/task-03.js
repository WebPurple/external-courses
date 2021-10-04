function checkProperty(inputObject, propertyName) {
  // eslint-disable-next-line no-restricted-syntax
  for (const objProp in inputObject) {
    if (objProp === propertyName) {
      return true;
    }
  }
  return false;
}
module.exports = checkProperty();
