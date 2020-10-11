function addString(myString1, myString2, myNumber) {
  let myNewString1 = myString1.split(' ',);
  let myNewString2 = [];
  
  for (let i = 0; i <= myNumber; i++) {
    myNewString2[i] = myNewString1[i];
  }
  
  myNewString2.push(myString2);
  
  for (let i = myNumber + 1; i < myNewString1.length; i++) {
    myNewString2.push(myNewString1[i]);
  }
  
  myNewString2 = myNewString2.join(' ');
  
  return myNewString2;
}

module.exports = addString;
