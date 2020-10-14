function stringWithoutSpaces(myString) {
  if (myString[0] === ' ' && myString[myString.length-1] === ' ') {
		return myString.slice(1, -1);
  } 
  
  return myString;
}

module.exports = stringWithoutSpaces;
