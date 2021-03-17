const arrayOutputParityNumber = (arrGiven) => {
    let arrEvenNumbers = 0;
    let arrOddNumbers = 0;
    let arrZero = 0;

    arrGiven.forEach(function(item) {
        if (isNaN(item)) {
            return;
        }

        if (item === null) {
            return;
        }

        if (item === 0) {
            arrZero = arrZero + 1;
            return;
        }

        const remainderOfTheDivision = item % 2;

        if (remainderOfTheDivision === 1) {
            arrOddNumbers = arrOddNumbers + 1;
            return;
        }

        arrEvenNumbers = arrEvenNumbers + 1;
    });

    let arrOutput = [arrEvenNumbers, arrOddNumbers, arrZero];
    
    return arrOutput;
};

module.exports = arrayOutputParityNumber;
