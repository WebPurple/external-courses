function sameArray(verifiableArray) {
  for (let i = 1; i < verifiableArray.length; i++) {
      if (verifiableArray[0] !== verifiableArray[i]) {
          return false;
      }
  }

  return true;
}

module.exports = sameArray;
