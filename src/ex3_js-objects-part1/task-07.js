function deepCopy(obj) {
  const objCopy = {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] !== 'object' || obj[key] === null) {
      objCopy[key] = obj[key];
    } else {
      objCopy[key] = deepCopy(obj[key]);
    }
  });

  return objCopy;
}

module.export = deepCopy;
