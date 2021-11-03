/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line consistent-return
function getPropertyFromProto(str, obj) {
  for (const item in obj.__proto__) {
    if (item === str) {
      return obj[item];
    }
  }
}

module.exports = getPropertyFromProto;
