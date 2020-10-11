function turnOverString(myString) {
  let myNewString =[];
  
  for (let i = 0; i < myString.length; i++) {
    myNewString[i] = myString[i];
  }
  
  myNewString = myNewString.reverse();
  myNewString = myNewString.join('');

  return myNewString;
}
module.exports = turnOverString;
