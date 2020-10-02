function objCopy(obj) {
  const objCopy = {};

  for (let key in obj) {
    if (key) {
      if (key === "Object Object") {
        key = objCopy(key);
      }

      objCopy[key] = key;
      objCopy[key] = obj[key];
    }
  }

  return objCopy;
}

module.exports = objCopy();
