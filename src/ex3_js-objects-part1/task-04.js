function createNewObject(str, obj) {
  let evnt = false;
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (key === str && Object.keys(obj).length !== 0) {
      evnt = true;
    }
  }
  if (evnt === false) {
    // eslint-disable-next-line no-param-reassign
    obj[str] = 'new';
  }
  return obj;
}

module.exports = createNewObject;
