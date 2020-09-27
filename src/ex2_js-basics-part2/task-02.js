module.exports = function countArray (myArray) {
    let counter = 0;
    for (let elem of myArray) {
     console.log(myArray[counter]);
     counter++;	
    }
    return console.log(myArray.length);
  }