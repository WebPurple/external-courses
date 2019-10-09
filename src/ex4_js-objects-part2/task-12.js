function sumAndRound(a, b) {
  let sum = 0;
    sum = (a + b).toFixed(3);
    return Number(sum);
};
module.exports = sumAndRound;