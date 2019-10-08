function makeCloneObj(obj) {
  let clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = obj[key];
    }
  }
  return clone
};

module.exports = makeCloneObj;