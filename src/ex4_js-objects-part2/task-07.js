function cutStringByNumber(myString, myNumber) {
  let myNewString =[];
 
  if (myString.length > myNumber) {
    for (let i = 0; i < myNumber - 1; i++) {
      myNewString[i] = myString[i];
    }
  }  
    
  myNewString = myNewString.join('') + '…';
  
  return myNewString;
}

module.exports = cutStringByNumber;
