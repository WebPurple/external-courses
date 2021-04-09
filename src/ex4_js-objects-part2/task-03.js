const getTrimmedString = (inputString) => {
    let intermediateString = inputString; 

    if (intermediateString[0] = " ") {
        intermediateString = intermediateString.slice(1);
    }

    if (intermediateString[intermediateString.length-1] = " ") {
        intermediateString = intermediateString.substring(0, intermediateString.length - 1);
    }

    return intermediateString; 
}

module.exports = getTrimmedString;
