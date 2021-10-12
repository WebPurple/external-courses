const deepClone = (obj) => {
  const newObj = {};

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      if (!Array.isArray(obj[key])) {
        newObj[key] = deepClone(obj[key]);
      } else {
        newObj[key] = Object.values(obj[key]);
      }
    } else {
      newObj[key] = obj[key];
    }
  });

  return newObj;
};

module.exports = deepClone;
