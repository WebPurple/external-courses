const getStringWithCapitalLettersInWords = (inputString) => {
    let arrayForString = inputString.split(" ");
    let resultString = "";

    arrayForString.forEach((item) => {
        if (resultString !== "") {
            resultString = resultString + " ";
        }
        resultString = resultString + item[0].toUpperCase() + item.slice(1,item.length);
    });

    return resultString;
};

module.exports = getStringWithCapitalLettersInWords;
