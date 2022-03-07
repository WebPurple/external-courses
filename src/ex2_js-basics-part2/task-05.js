function maxElement(array) {
  let al = array.length;
  let max = array[al - 1];
    while ((al--)) { // eslint-disable-line
    if (array[al] > max) {
      max = array[al];
    }
  }
  return max;
}

module.exports = maxElement();

/// /Unary operator '--' used  no-plusplus'
