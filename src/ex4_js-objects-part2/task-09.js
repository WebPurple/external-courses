function sliceStrings(str1, str2, num) {
  const array = str1.split(" ");

  array.splice(array.length - num, 0, str2);

  return array.join(' ');
}

module.exports = sliceStrings;
