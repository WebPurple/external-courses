function cloneObj(obj) {
  const objCopy = new Object();

  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      objCopy[key] = obj[key].map((val) => {
        if (typeof val == "object") {
          return cloneObj(val);
        }
        
        return val;
      });
    } else if (typeof obj[key] === "object") {
      objCopy[key] = cloneObj(obj[key]);
    } else {
      objCopy[key] = obj[key];
    }
  }

  return objCopy;
}

module.exports = cloneObj;
