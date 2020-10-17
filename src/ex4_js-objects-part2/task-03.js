function stringWithoutSpaces(myString) {
  let myNewString = myString;
  
  if (myString.startsWith(' ')) {
    myNewString = myString.slice(1);
  }
  
  if (myString.endsWith(' ')) {
    myNewString = myNewString.slice(0,-1);
  }
  
  return myNewString;
}

module.exports = stringWithoutSpaces;
