function cloneThisObject(obj) {
  const copy = {};
  return Object.assign(copy, obj);
}

module.exports = cloneThisObject;
