function prototypeCheck(userProperty,userData) {
  return userData.__proto__[userProperty];
}

module.exports = prototypeCheck;
