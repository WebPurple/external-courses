function returnValueObj(prop, obj) {
  if (Object.getPrototypeOf(obj).hasOwnProperty(prop)) {
    return Object.getPrototypeOf(obj)[prop];
  }
  
  return undefined;
}

module.exports = returnValueObj;
