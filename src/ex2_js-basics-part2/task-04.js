function sameArray(VerifiableArray) {
  for (let i = 1; i < VerifiableArray.length; i++) {
      if (VerifiableArray[0] !== VerifiableArray[i]) {
          return false;
      }
  }

  return true;
}

module.exports = sameArray;
