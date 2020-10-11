function stringLowerCamelCase(myString) {
  let myNewString =[];
  
  for (let i = 0; i < myString.length; i++) {
    myNewString[i] = myString[i].toLowerCase();
    
    if (myNewString[i - 1] === ' ') {
      myNewString[i] = myNewString[i].toUpperCase();
      myNewString[i - 1] = '';
    }
  }
  
  myNewString = myNewString.join('');
  
  return myNewString;
}

module.exports = stringLowerCamelCase;
