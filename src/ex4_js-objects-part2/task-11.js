function countString(myString) {
  let myObject = {};
  
  for (let i = 0; i < myString.length; i++) {
    if (!myObject.hasOwnProperty(myString[i])) {
      myObject[myString[i]] = {
        value: 0,
        };
    }
    
    myObject[myString[i]].value++;
  }
  
  for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
    console.log(key + ':' + myObject[key].value);
    }
  }
}

module.exports = countString;
