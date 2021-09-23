'use strict'

function SameArray (VerifiableArray) {

    let Same;
    for (let i = 1; i < VerifiableArray.length; i++) {
        if (VerifiableArray[0] === VerifiableArray[i]) {
            Same = true;
        } else {
            Same = false;
            break;
        }
    }

    Same ? console.log('Array is the same') : console.log('Array is not the same');

}

module.exports = SameArray;
