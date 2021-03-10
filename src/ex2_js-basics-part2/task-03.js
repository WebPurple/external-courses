const arrayOutputParityNumber = (arrGiven) => {

    let arrEvenNumbers = arrGiven.filter(function(number) {
        return (number % 2 === 0) && (number !== 0) && (number !== null);
    });

    let arrOddNumbers = arrGiven.filter(function(number) {
        return (number % 2 === 1) && (number !== 0) && (number !== null);
    });

    let arrZero = arrGiven.filter(function(number) {
        return (number === 0) && (number !== null);
    });

    let arrOutput = [arrEvenNumbers.length, arrOddNumbers.length, arrZero.length];

    console.log('CountEvenNumbers =', arrEvenNumbers.length);
    console.log('CountOddNumbers =', arrOddNumbers.length);
    console.log('CountZero =', arrZero.length);
    console.log('Output array =', arrOutput);

    return arrOutput;
}

module.exports = arrayOutputParityNumber;