function countString(myString) {
  myNewString = [];
  
  for (let i = 0; i < myString.length; i++) {
    if (!myNewString.includes(myString[i])) {
      myNewString.push(myString[i]);
      
      console.log(i + ' : ' + myString[i]);
    }
  }
}

module.exports = countString;
