function copyObject(obj) {
  const cloneObj = Object.assign({}, obj);
  return cloneObj;
}

module.exports = copyObject;
