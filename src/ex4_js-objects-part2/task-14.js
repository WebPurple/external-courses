function returnRandom(min, max) {
  let resultRandom = (min + Math.random() * (max - min)).toFixed(0);
  return Number(resultRandom);
};

module.exports = returnRandom;