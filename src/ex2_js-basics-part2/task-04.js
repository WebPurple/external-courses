const checkArrayForIdenticalValues = (arrGiven) => {

    let lastItem = arrGiven.length - 1;

    let resultOfChecking = arrGiven.every(function (item, index) {
        if (index === lastItem) {
            return true;
        }
        if (item === arrGiven[index + 1]) {
            return true;
        }
        return false;
    });

    console.log('All elements of the array are equal:', resultOfChecking);
    return resultOfChecking;
}

module.exports = checkArrayForIdenticalValues(arrGiven);