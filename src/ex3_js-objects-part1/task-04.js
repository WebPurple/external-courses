function addPropIfMissing(inputObject, propertyName) {
  let newObj;
  // eslint-disable-next-line no-restricted-syntax
  for (const objProp in inputObject) {
    if (objProp === propertyName) {
      Object.assign(newObj, inputObject);
      return newObj;
    }
  }
  newObj = Object.assign(newObj, inputObject);
  newObj.propertyName = 'new';
  return newObj;
}
module.exports = addPropIfMissing();
