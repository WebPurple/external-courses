function getRandomMinMax(myMinNumber, myMaxNumber) {
  return Math.floor(myMinNumber + Math.random() * (myMaxNumber + 1 - myMinNumber));
}

module.exports = getRandomMinMax;
