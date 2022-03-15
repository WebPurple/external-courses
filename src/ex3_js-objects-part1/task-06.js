const getProperty = (object, propertyPath) => {
  const arr = propertyPath.split('.');
  let result = object;

  for (let i = 0; i < arr.length; i += 1) {
    result = result[arr[i]];

    if (result === undefined) {
      return undefined;
    }
  }

  return result;
};

module.exports = getProperty;
