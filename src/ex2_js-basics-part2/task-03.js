const arrayOutputParityNumber = (arrGiven) => {
    let arrEvenNumbers = 0;
    let arrOddNumbers = 0;
    let arrZero = 0;

    arrGiven.forEach((item) => {
            if ((isNaN(item)) || (item === null)) {
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
    
    return [arrEvenNumbers, arrOddNumbers, arrZero];
};

module.exports = arrayOutputParityNumber;
