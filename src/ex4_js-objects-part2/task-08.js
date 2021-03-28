function getStringInCamelCase(string) {
    const arrWords = string.split(' ');
  
    const arrToLowerCase = arrWords.map(elem => {
      return elem.toLowerCase().replace(elem[0], elem[0].toUpperCase());;
    });
  
    const arrWordsInCamelCase = arrToLowerCase.map(elem => {
      if (arrToLowerCase.indexOf(elem) == 0) {
        return elem;
      }
  
      return elem.replace(elem[0], elem[0].toUpperCase());
      
    });
    
    return arrWordsInCamelCase.join('');
  }

module.exports = getStringInCamelCase;
