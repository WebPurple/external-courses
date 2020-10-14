function stringAllWordsCapital(myString) {
  let myNewString = myString.split(' ');
  
  for (i in myNewString) {
    if (myNewString.hasOwnProperty(i)) {
      myNewString[i] = myNewString[i][0].toUpperCase() + myNewString[i].slice(1);
    }
  }
  
  return myNewString.join(' ');
}

module.exports = stringAllWordsCapital;
