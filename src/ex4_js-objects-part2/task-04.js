function getStringWithCapitalLetter(string) {
    if (!string) {
        return string;
    }

    const capitalLetter = string[0].toUpperCase();

    return string.replace(string[0], capitalLetter);
}

module.exports = getStringWithCapitalLetter;
