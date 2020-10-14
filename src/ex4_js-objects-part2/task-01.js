function returnValueObj(prop, obj) {
  for (let key in obj) {
    if (!obj.hasOwnProperty(prop)) {
      return obj[prop];
    }
  }

  return undefined;
}

module.exports = returnValueObj;
