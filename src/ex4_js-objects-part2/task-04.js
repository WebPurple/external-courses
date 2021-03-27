const getStringCapitalLetter = (inputString) => {
    let intermediateString = inputString.trim();
    intermediateString = intermediateString[0].toUpperCase() + intermediateString.slice(1,intermediateString.length);

    return intermediateString;
};

module.exports = getStringCapitalLetter;
