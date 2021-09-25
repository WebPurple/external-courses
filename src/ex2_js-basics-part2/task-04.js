'use strict';

function SameArray(VerifiableArray) {
    let Same;
    for (let i = 1; i < VerifiableArray.length; i++) {
        if (VerifiableArray[0] === VerifiableArray[i]) {
            Same = true;
        } else {
            Same = false;
            break;
        }
    }
    return Same;
}

module.exports = SameArray;
