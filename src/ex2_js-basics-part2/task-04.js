function checkIdenticalItems(array) {
  array.sort();
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i - 1]) {
      return true
    }
  }
  return false
}

module.exports = checkIdenticalItems;