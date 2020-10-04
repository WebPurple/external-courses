function deepClone(obj) {
  const clone = {};

  for (const key in obj) {
    const newProperty = obj[key];

    if (typeof newProperty === "object") {
      if (Array.isArray(newProperty)) {
        const mass = [];

        for (let item of newProperty) mass.push(deepClone(item));
        clone[key] = mass;
      } else {
        clone[key] = deepClone(newProperty);
      }

    } else {
      clone[key] = newProperty;
    }
  }

  return clone;
}

module.exports = deepClone;
