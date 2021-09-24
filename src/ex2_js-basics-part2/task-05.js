'use strict'

function maxElementArray (CurrentArray) {
    let maxElement = CurrentArray[0];
    for (let i = 0; i < CurrentArray.length; i++){
        if ((CurrentArray[i] >= 0) && Number.isInteger(CurrentArray[i])) {
            if (CurrentArray[i] > maxElement) {
                maxElement = CurrentArray[i];
            }
        }  else {
            console.log('Array have wrong elements');
            maxElement = 'wrong array';
            break;
        }
    }
    if (Number.isInteger(maxElement)) {
        console.log('Max element of array: ' + maxElement);
    }
}

module.exports = maxElementArray;
