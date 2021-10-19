function checkExistKey(key, obj) {
  const newObj = { ...obj };

  if (obj.hasOwnProperty(key)) {
    return obj;
  }

  newObj[key] = 'new';
  return newObj;
}

module.exports = checkExistKey;
