function deepCopyObject(objectExample) {
  let newObject;
  if (Array.isArray(objectExample)) {
    if (objectExample.length) {
      newObject = Object.assign([], objectExample);
      newObject.length = objectExample.length;
      for (let i = 0; i < objectExample.length; i += 1) {
        if (typeof objectExample[i] === 'object') {
          newObject[i] = deepCopyObject(objectExample[i]);
        }
      }
      return newObject;
    }
    return objectExample;
  }
  newObject = { ...objectExample };
  Object.keys(newObject).forEach((key) => {
    if (typeof objectExample[key] === 'object') {
      newObject[key] = deepCopyObject(objectExample[key]);
    } else {
      newObject[key] = objectExample[key];
    }
  });

  return newObject;
}

module.exports = deepCopyObject;
