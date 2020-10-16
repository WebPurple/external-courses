function addString(myString1, myString2, myNumber) {
  let newArray = [];
  let startString = myString1.split(' ').slice(0, myNumber + 1).join(' ');
  let finishString = myString1.split(' ').slice(myNumber + 1).join(' ');
  
  newArray.push(startString, myString2, finishString);
  
  return newArray.join(' ');
}

module.exports = addString;
