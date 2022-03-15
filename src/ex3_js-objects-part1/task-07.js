/* eslint-disable no-unused-vars */
const deepClone = (object) => {
  let nestedObj = {};

  if (Array.isArray(object)) {
    nestedObj = [];
  }

  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      if (typeof (object[key]) === 'object' && object[key] !== null) {
        nestedObj[key] = deepClone(object[key]);
      } else {
        nestedObj[key] = object[key];
      }
    }
  }

  return nestedObj;
};

module.exports = deepClone;
