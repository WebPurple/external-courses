function getStringInCamelCase(string) {
    const arrWords = string.split(' ');

    let arrWordsInCamelCase = arrWords.map(elem => {
        return elem.toLowerCase().replace(elem[0], elem[0].toUpperCase());;
    });
    
    return arrWordsInCamelCase.join('');
}

module.exports = getStringInCamelCase;
