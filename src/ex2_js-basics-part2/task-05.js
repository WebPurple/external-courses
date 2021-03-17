const maxNumberOfArrays = (arrGiven) => {
    let maxNumber = arrGiven.reduce(function(maxNumber, item) {
        if (maxNumber < item) {
            return item;
        } 
        return maxNumber
    });

    return maxNumber;
};

module.exports = maxNumberOfArrays(arrGiven);
