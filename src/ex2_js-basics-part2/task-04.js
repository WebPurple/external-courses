function checkIdenticalItems(array) {
  var elem = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] === elem) {
      return true
    }
  }
  return false
}

module.exports = checkIdenticalItems;