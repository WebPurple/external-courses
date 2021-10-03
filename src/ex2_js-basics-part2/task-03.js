function kindsArrayNumbers(needfullArray) {
  const numberArray = [0, 0, 0];

  for (let i = 0; i < needfullArray.length; i++) {
     if (typeof needfullArray[i] === 'number') {
          if ((needfullArray[i] % 2 === 0) && (needfullArray[i] !== 0)) {
              numberArray[0]++;
          } else if (needfullArray[i] % 2 === 1) {
              numberArray[1]++;
          } else {
              numberArray[2]++;
          }
      }
  }

  console.log(`Number of Even: ${numberArray[0]}`);
  console.log(`Number of Odd:  ${numberArray[1]}`);
  console.log(`Number of Null: ${numberArray[2]}`);

  return numberArray;
}

module.exports = kindsArrayNumbers;
