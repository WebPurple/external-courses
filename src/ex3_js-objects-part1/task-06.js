function deepClone(obj) {
  const cloneObj = {};
  for (const i in obj) {
    if (obj[i] instanceof Object) {
      cloneObj[i] = deepClone(obj[i]);
      continue;
    }
    cloneObj[i] = obj[i];
  }
  return cloneObj;
}

module.exports = deepClone;
