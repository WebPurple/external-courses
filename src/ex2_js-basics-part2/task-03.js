function counter(array) {
    let resultArray = [];
    let even = 0;
    let odd = 0;
    let zero = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i]) && array[i] !== 0) {
            if (array[i] % 2 === 0) {
                even++;
            } else if (array[i] % 2 !== 0 && array[i] !== 0) {
                odd++;
            }
        } else if (array[i] === 0) {
            zero++;
        }
    }
    resultArray.push(even, odd, zero);
    return resultArray;
}
module.exports = counter;