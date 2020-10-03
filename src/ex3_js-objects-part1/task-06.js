function CloneObj(obj) {
  const objCopy = new Object();

  for (let key in obj) {
    if (typeof obj[key] === "object object") {
      objCopy[key] = CloneObj(obj[key]);
    } else {
      objCopy[key] = obj[key];
    }
  }

  return objCopy;
}

module.exports = CloneObj();
