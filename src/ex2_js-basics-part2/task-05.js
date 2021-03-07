function getMaxNumber(arrNumbers) {
    let maxNumber = 0;

    arrNumbers.filter(elem => {
        if(elem > maxNumber) {
            maxNumber = elem;
        }
    });
    
    return maxNumber;
}

module.exports = getMaxNumber;