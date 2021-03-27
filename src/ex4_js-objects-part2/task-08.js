const getStringWithLowerCamelCase = (inputString) => {
    let arrayForString = inputString.split(" ");
    let resultString = "";
    
    arrayForString.forEach((item, index) => {
        if (index === 0) {
            resultString = resultString + item.toLowerCase();
            return;
        }
        
        let intermediateString = item.slice(1,item.length).toLowerCase();
        resultString = resultString + item[0].toUpperCase() + intermediateString;
    });

    return resultString;
};

module.exports = getStringWithLowerCamelCase;
