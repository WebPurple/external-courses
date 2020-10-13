function returnValueObj(prop, obj) {
  if (obj.hasOwnProperty(prop)) {
    return undefined;
  }

  return obj[prop];
}

module.exports = returnValueObj;
