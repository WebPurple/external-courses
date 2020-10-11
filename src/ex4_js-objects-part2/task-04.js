function stringFirstCapital(myString) {
  let myNewString =[];
  
  for (let i = 0; i < myString.length; i++) {
    myNewString[i] = myString[i];
  }
  
  myNewString[0] = myNewString[0].toUpperCase();
  myNewString = myNewString.join('');
  
  return myNewString;
}

module.exports = stringFirstCapital;
