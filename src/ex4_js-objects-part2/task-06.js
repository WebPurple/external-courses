function stringAllWordsCapital(myString) {
  let myNewObjectString = myString.split(' ');
  
  for (let key = 0; key < myNewObjectString.length; key++) {
    myNewObjectString[key] = myNewObjectString[key][0].toUpperCase() + myNewObjectString[key].slice(1);
  }
  
  return myNewObjectString.join(' ');
}

module.exports = stringAllWordsCapital;
