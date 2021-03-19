function getNumberOfRepetitions(string) {
    const splitString = string.split('');

    console.log(splitString.reduce((result, letter) => (result[letter] = (result[letter] || 0) + 1, result), {}));
}

module.exports = getNumberOfRepetitions;
