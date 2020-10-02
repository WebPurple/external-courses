"use strict"

function writeAllArrayElemsAndLenght(inputArray) {
  if (Array.isArray(inputArray)) {
    inputArray.forEach(element => { 
      console.log(element) 
    });
    console.log(`Length: ${inputArray.length}`);
  }
  else {
    console.log('Input is not array');
  }
}

module.exports = writeAllArrayElemsAndLenght;
