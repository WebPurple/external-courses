function checkArray(yourArray) {
  for (let i = 0; i < yourArray.length; i += 1) {
    console.log(yourArray[i]);
  }
  console.log(yourArray.length);
}

module.exports = checkArray;
