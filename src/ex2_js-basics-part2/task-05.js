function maxNumber(array) {
  const result = [];

  for (let elem of array) {
    if (elem >= 0) result.push(elem);
  }

  return Math.max.apply(null, result);
}

module.exports = maxNumber;