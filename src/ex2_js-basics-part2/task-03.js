function checkEvenOdd(yourArray) {
  let even = 0;
  let odd = 0;
  let zero = 0;
  for (let i = 0; i < yourArray.length; i += 1) {
    if (typeof yourArray[i] === 'number') {
      if (yourArray[i] === 0) {
        zero += 1;
      } else if (yourArray[i] % 2 === 0) {
        even += 1;
      } else {
        odd += 1;
      }
    }
  }
  return [even, odd, zero];
}

module.exports = checkEvenOdd;
