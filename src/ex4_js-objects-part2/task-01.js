function returnValueObj(prot, obj) {
  return obj.__proto__[prot];
}

module.exports = returnValueObj;
