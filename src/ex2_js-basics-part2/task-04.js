const checkingIdenticalElements = (ARR) => {
  for (let i = 0; i < ARR.length; i += 1) {
    for (let a = i + 1; a < ARR.length; a += 1) {
      if (ARR[i] !== ARR[a]) {
        return false;
      }
    }
  }

  return true;
};

module.exports = checkingIdenticalElements;
