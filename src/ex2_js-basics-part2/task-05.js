function getMaxNumber(arr) {
    let maxNumber = 0;

    arr.filter(elem => {
        if(elem > maxNumber) {
            maxNumber = elem;
        }
    });
    
    return maxNumber;
}

module.exports = getMaxNumber;