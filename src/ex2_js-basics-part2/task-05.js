const maxNumberOfArrays = (arrGiven) => {
    return arrGiven.reduce((maxNumber, item) => {
        if (maxNumber < item) {
            return item;
        } 
        return maxNumber
    });
};

module.exports = maxNumberOfArrays(arrGiven);
