function stringLowerCamelCase(myString) {
  let myNewString = myString.toLowerCase().split(' ');
  
  for (let key = 1; key < myNewString.length; key++) {
      myNewString[key] = myNewString[key][0].toUpperCase() + myNewString[key].slice(1);
  }

  return myNewString.join('');
}

module.exports = stringLowerCamelCase;
