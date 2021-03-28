function getReverseString(string) {
    const splitString = string.split('');

    return splitString.reverse().join('');
}

module.exports = getReverseString;
