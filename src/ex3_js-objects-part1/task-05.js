function copyObject(obj) {
  let newObj;
  Object.assign(newObj, obj);
  return newObj;
}
module.exports = copyObject();
