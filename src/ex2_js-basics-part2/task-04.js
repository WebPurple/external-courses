function sameArray(verifiableArray) {
  for (let i = 0; i < verifiableArray.length; i += 1) {
    if (verifiableArray[0] !== verifiableArray[i]) {
      return false;
    }
  }

  return true;
}

module.exports = sameArray;
