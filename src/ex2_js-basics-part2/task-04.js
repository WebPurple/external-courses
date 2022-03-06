const isEqual = (array) => {
  const set = new Set(array);

  return set.size === 1;
};

module.exports = isEqual;
