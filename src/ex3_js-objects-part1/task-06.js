function deepClone(obj) {
  const cloneObj = {};
  for (const key in obj) {
    if (obj[key] instanceof Object) {
      cloneObj[key] = deepClone(obj[key]);
      continue;
    }
    cloneObj[key] = obj[key];
  }
  return cloneObj;
}

module.exports = deepClone;
