"use strict"

function countOddAndEven(inputArray) {
  let numberOfOdd = 0;
  let numberOfEven = 0;
  let numberOfZeros = 0;
  
  inputArray.forEach(element => {
    if (element !== null && element !== undefined) {
      if (element === 0) {
        ++numberOfZeros;
      }
      else { 
        if (element % 2 === 0) { 
          ++numberOfEven;
        }
        else {
          ++numberOfOdd;
        }
      }
    }
  });

  return [numberOfEven, numberOfOdd, numberOfZeros];
}

module.exports = countOddAndEven;
