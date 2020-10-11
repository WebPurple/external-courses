function stringCapital(myString) {
  let myNewString =[];
  
  for (let i = 0; i < myString.length; i++) {
    myNewString[i] = myString[i];
    
    if (myNewString[i - 1] === ' ') {
      myNewString[i] = myNewString[i].toUpperCase();
    }
  }
  
  myNewString[0] = myNewString[0].toUpperCase();
  myNewString = myNewString.join('');
  
  return myNewString;
}

module.exports = stringCapital;
