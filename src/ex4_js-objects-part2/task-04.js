const getStringCapitalLetter = (inputString) => {
    const intermediateString = inputString.trim();

    return `${intermediateString[0].toUpperCase()}${intermediateString.slice(1,intermediateString.length)}`;
};

module.exports = getStringCapitalLetter;
