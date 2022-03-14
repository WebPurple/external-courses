function deepCloneObject(object) {
  let copyDeepObject = {};
  for (let key in object) {
    if (
      typeof object[key] === "object" &&
      object[key] !== null &&
      !(object[key] instanceof Array)
    ) {
      copyDeepObject[key] = deepCloneObject(object[key]);
    } else if (object[key] instanceof Array) {
      copyDeepObject[key] = object[key].slice(0);
    } else {
      copyDeepObject[key] = object[key];
    }
  }
  return copyDeepObject;
}

module.exports = deepCloneObject;
