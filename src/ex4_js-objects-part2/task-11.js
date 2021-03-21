function getNumberOfRepetitions(string) {
  const splitString = string.split('');

  let result = [];
  
  for (let letter of splitString) {
    if (!result.includes(letter)) {
      result.push(letter);
    }
  }

  console.log(result.length);
}

module.exports = getNumberOfRepetitions;
