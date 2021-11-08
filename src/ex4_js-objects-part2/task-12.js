function sum(a, b) {
  let result = a + b;
  result = result.toFixed(3);
  return parseFloat(result, 10);
}

module.exports = sum;
