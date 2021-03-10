function getMaxNumber(arrNumbers) {

    let maxNumber = 0;

    arrNumbers.forEach(elem => {
        if(elem > maxNumber) {
            maxNumber = elem; 
        }
    });

    if(maxNumber !== 0) {
        return maxNumber;
    }
}

module.exports = getMaxNumber;
