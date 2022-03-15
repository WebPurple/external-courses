const checkimgObjectParams = (string, object) => {
  const newObj = { ...object };

  // eslint-disable-next-line no-restricted-syntax
  if (!(string in newObj)) {
    newObj[string] = 'new';
  }
  return newObj;
};

module.exports = checkimgObjectParams;
