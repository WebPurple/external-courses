function getNumberOfRepetitions(string) {
  const splitString = string.split('');

  const result = {};

  for (let i = 0; i < splitString.length; i++) {
      const elemArr = splitString[i];

      if (result[elemArr] !== undefined) {
        result[elemArr]++;
      }
          
      if (result[elemArr] === undefined) {
        result[elemArr] = 1;
      } 
  }
  
  return result;
}

module.exports = getNumberOfRepetitions;
