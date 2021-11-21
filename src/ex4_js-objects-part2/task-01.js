const searchPrototype = (key, obj) => {
  let valueProtopype;

  if (!obj.hasOwnProperty(key)) {
    valueProtopype = obj[key];
  }

  return valueProtopype;
};

module.exports = searchPrototype;
