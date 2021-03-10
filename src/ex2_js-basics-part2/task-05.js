//Эта функция так же работает и для отрицательных чисел

const maxNumberOfArrays = (arrGiven) => {
    let maxNumber = arrGiven.reduce(function(maxNumber, item) {
        if (maxNumber < item) {
            return item;
        } 
        return maxNumber
    }, arrGiven[0]);

    console.log(maxNumber);
    return maxNumber;
}

module.exports = maxNumberOfArrays;