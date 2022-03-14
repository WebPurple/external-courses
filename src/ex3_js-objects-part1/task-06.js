function getProperty(object, propertyPath) {
  let currentObject = object;

  for (let property of propertyPath.split(".")) {
    if (currentObject == null) return undefined;
    currentObject = currentObject[property];
  }

  return currentObject;
}

module.exports = getProperty;
