function objClone(obj) {
  const clone = {};

  Object.assign(clone, obj);

  return clone;
}

module.exports = objClone;
