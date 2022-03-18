function randomNumber(min, max) {
  const nubmer = Math.random() * (max - min) + min;
  return Math.floor(nubmer);
}

module.export = randomNumber;
