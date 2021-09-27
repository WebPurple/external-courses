function searchSame(yourArray) {
  let x;
  for (let i = 1; i < yourArray.length; i += 1) {
    if (yourArray[0] === yourArray[i]) {
      x = true;
    } else {
      return false;
    }
  }
  return x;
}

module.exports = searchSame;
