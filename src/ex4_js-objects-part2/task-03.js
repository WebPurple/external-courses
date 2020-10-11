function stringWithoutSpaces(myString) {
  let myNewString =[];
  
  for (let i = 0; i < myString.length - 2; i++) {
    myNewString[i] = myString[i + 1];
  }
  
  myNewString = myNewString.join('');
  
  return myNewString;
}

module.exports = stringWithoutSpaces;
