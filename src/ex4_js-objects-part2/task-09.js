function getStringInString(string, word, num) {
    const splitString = string.split(' ');

    splitString.splice(num + 1, 0, word);

    return splitString.join(' ');
}

module.exports = getStringInString;
