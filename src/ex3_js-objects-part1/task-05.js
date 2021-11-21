function objectClone(obj) {
  const objNew = Object.assign(obj);

  return objNew.obj;
}

module.exports = objectClone;
