function deepClone(obj) {
  const clone = {};

  for (const key in obj) {
    const keyObj = obj[key];

    if (typeof keyObj === "object") {
      if (Array.isArray(keyObj)) {
        const modernArray = [];

        for (let item of keyObj) {
          modernArray.push(deepClone(item));
        }
        clone[key] = modernArray;
      } else {
        clone[key] = deepClone(keyObj);
      }
    } else {
      clone[key] = keyObj;
    }
  }

  return clone;
}

module.exports = deepClone;
