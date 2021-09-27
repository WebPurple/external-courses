const maxValueInArray = (array) => {
  array.sort((a, b) => b - a);

  return array[0];
};

module.exports = maxValueInArray;
