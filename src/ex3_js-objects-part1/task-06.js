function deepClone(obj) {
  const clone = { ...obj };

  if (obj === null) return null;

  Object.keys(clone).forEach(
    (key) => {
      if (typeof obj[key] === 'object') {
        clone[key] = deepClone(obj[key]);
      } else {
        clone[key] = obj[key];
      }
    },
  );

  if (Array.isArray(obj) && obj.length) {
    clone.length = obj.length;

    return Array.from(clone);
  }
  if (Array.isArray(obj)) {
    return Array.from(obj);
  }

  return clone;
}

module.exports = deepClone;
