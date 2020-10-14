function stringLowerCamelCase(myString) {
  let myNewString = myString.toLowerCase().split(' ');
  
  for (i=1; i < myNewString.length; i++) {
    if (myNewString.hasOwnProperty(i)) {
      myNewString[i] = myNewString[i][0].toUpperCase() + myNewString[i].slice(1);
    }
  }
  
  return myNewString.join('');
}

module.exports = stringLowerCamelCase;
