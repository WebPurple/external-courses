const deepClone = (obj) => {
  const newObj = Array.isArray(obj) ? [] : {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      newObj[key] = deepClone(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });

  return newObj;
};

module.exports = deepClone;
