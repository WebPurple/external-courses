function cutStringByNumber(myString, myNumber) {
  return myString.slice(0, myNumber - 1) + '…';
}

module.exports = cutStringByNumber;
