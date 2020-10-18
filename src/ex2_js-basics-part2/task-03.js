
function oddEven(arr) {
    
    let sumEven = 0;
    let sumOdd = 0;
    let sumZero = 0;

    for (let key of arr) {
        if (key !== null && key !== undefined) {
            if (key === 0) {
                sumZero = sumZero + 1;
            } else {
                if (key % 2 === 0) {
                    sumEven = sumEven + 1;
                } else {
                    sumOdd = sumOdd + 1;
                }
            }
        }
    }

    return [sumEven, sumOdd, sumZero];
};
module.exports = oddEven;
