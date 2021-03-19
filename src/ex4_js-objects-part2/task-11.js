function getNumberOfRepetitions(string) {
    const arrLetters = string.split("");
    let result = [];
  
    for (let string of arrLetters) {
      if (!result.includes(string)) {
        result.push(string);
      }
    }
  
    console.log(result.length);
}


module.exports = getNumberOfRepetitions;
