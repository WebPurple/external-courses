function getWordsWithCapitalLetters(string) {
    const arrWords = string.split(' ');

    const arrWordsWithCapLetters = arrWords.map(elem => {
        const capitalLetter = elem[0].toUpperCase();

        return elem.replace(elem[0], capitalLetter);
    });

    return arrWordsWithCapLetters.join('');
}

module.exports = getWordsWithCapitalLetters;
