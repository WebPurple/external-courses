function returnValueObj(prop, obj) {
  return Object.getPrototypeOf(obj)[prop]
  }

module.exports = returnValueObj;
