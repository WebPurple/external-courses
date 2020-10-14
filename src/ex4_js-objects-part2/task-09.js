function addString(myString1, myString2, myNumber) {
  let newArray = [];
  
  newArray.push(myString1.split(' ').slice(0, myNumber + 1).join(' '), myString2, myString1.split(' ').slice(myNumber + 1).join(' '));
  
  return newArray.join(' ');
}

module.exports = addString;
