function randomNumber() {
  let rand = 0 - 0.5 + Math.random() * (100 - 0 + 1);

  return Math.floor(rand);
}

module.exports = randomNumber;
