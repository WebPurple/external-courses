function evenAndOddElements(arrayElements) {
    let array = [0,0,0];
    for (let index = 0; index < arrayElements.length; index++) {
        if (typeof (arrayElements[index]) == 'number') {
            if (arrayElements[index] == 0) {
                array[2]++;
            } else if (arrayElements[index] % 2 == 0) {
                array[0]++;
            } else {
                array[1]++;
            } 
        }
    }
    return array;
}
module.exports = checkingIdenticalElements;