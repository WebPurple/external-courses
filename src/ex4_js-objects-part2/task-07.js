const getStringWithManyDots = (inputString, lengthString) => {
    if (inputString.length > lengthString) {
        return inputString.substring(0,lengthString-1)+"…";
    }
    
    return inputString;
};

module.exports = getStringWithManyDots;