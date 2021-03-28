function trimString(string, number) {
    if (string.length < number) {
        return string;
    }

    const arrLetters = string.split('');

    const truncatedArray = arrLetters.filter(elem => arrLetters.indexOf(elem) + 1 < number);

    return truncatedArray.join('') + '…'; 
}

module.exports = trimString;
