function arrMax(e) {
  let max = 0;
  e.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

module.exports = arrMax;
