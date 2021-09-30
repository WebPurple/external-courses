function kindsArrayNumbers(needfullArray) {
  const NumberArray = [0, 0, 0];

  for (let i = 0; i < needfullArray.length; i++) {
     if (typeof needfullArray[i] === 'number') {
          if ((needfullArray[i] % 2 === 0) && (needfullArray[i] !== 0)) {
              NumberArray[0]++;
          } else if (needfullArray[i] % 2 === 1) {
              NumberArray[1]++;
          } else {
              NumberArray[2]++;
          }
      }
  }

  console.log(`Number of Even: ${NumberArray[0]}`);
  console.log(`Number of Odd:  ${NumberArray[1]}`);
  console.log(`Number of Null: ${NumberArray[2]}`);

  return NumberArray;
}

module.exports = kindsArrayNumbers;
