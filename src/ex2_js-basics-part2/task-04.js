const checkArrayForIdenticalValues = (arrGiven) => {

    const lastItem = arrGiven.length - 1;

    let countIdenticalValues = arrGiven.reduce(function (previousValue, item, index) {
        if (index === lastItem) {
            return previousValue + 1;
        }

        if (item === arrGiven[index + 1]) {
            return previousValue + 1;
        }

        return previousValue;
    });

    const resultOfChecking = (countIdenticalValues === arrGiven.length) ? true : false;

    return resultOfChecking;
};

module.exports = checkArrayForIdenticalValues;
