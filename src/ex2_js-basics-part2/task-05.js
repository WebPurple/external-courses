const MaxValueInArray = (array) => {
  array.sort((a, b) => b - a);
  if (array[0] > 0) return array[0];
  return null;
};

module.exports = MaxValueInArray;
