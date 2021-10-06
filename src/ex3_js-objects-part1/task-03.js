function existProperty(property, obj) {
  if (obj.hasOwnProperty(property)) {
    return true;
  }

  return false;
}

module.exports = existProperty;
