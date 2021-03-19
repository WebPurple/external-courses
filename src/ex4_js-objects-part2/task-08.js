function getStringInCamelCase(string) {
    const arrWords = string.split(' ');

    const wordsInCapitalLetter = arrWords.map(elem => {
        return elem.replace(elem[0], elem[0].toUpperCase());         
    });
    
    const glueString = wordsInCapitalLetter.join('');

    return glueString.replace(glueString[0], glueString[0].toLowerCase());
}

module.exports = getStringInCamelCase;
