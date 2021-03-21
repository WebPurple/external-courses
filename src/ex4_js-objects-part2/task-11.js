function getNumberOfRepetitions(string) {
  const splitString = string.split('');
  
  const result = splitString.reduce((result, letter) => (result[letter] = (result[letter] || 0) + 1, result), []);
  
  for (let elem in result) {
    console.log(result[elem])
  }
}


module.exports = getNumberOfRepetitions;
