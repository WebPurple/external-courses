function theSame(massive) {
  return massive.every((element) => element === massive[0]);
}

module.exports = theSame;
