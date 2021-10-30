function doYouHaveAProperty(str, obj) {
  if (Object.keys(obj).length !== 0) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in obj) {
      if (key === str) {
        return true;
      }
    }
    return false;
  }
  return false;
}

module.exports = doYouHaveAProperty;
