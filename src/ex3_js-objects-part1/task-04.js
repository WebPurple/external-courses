const checkimgObjectParams = (string, object) => {
  const newObj = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      newObj[key] = object[key];
    }
  }

  if (!(string in newObj)) {
    newObj[string] = 'new';
  }

  return newObj;
};

module.exports = checkimgObjectParams;
