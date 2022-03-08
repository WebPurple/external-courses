const arrayOddAndEvenNumbers = (arr) => {
  const evenNumbers = arr.filter((elem) => elem % 2 === 0 && elem !== 0);
  const oddNumbers = arr.filter((elem) => elem % 2 !== 0);
  const zero = arr.filter((elem) => elem === 0);
  console.log('Четных: ', evenNumbers.length);
  console.log('Нечетных: ', oddNumbers.length);
  console.log('Нулей: ', zero.length);
};
module.exports = arrayOddAndEvenNumbers;
