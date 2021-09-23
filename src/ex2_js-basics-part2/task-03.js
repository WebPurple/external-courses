'use strict'


function KindsArrayNumbers (NeedfullArray) {

    let NumberEven = 0;
    let NumberOdd = 0;
    let NumberNull = 0;
    for (let i = 0; i < NeedfullArray.length; i++) {

        if (typeof NeedfullArray[i] === 'number') {
            if ((NeedfullArray[i] % 2 === 0) && (NeedfullArray[i] !== 0)) {
                NumberEven++;
            } else if (NeedfullArray[i] % 2 !== 0) {
                NumberOdd++;
            } else if (NeedfullArray[i] === 0) {
                NumberNull++;
            }
        }
    }

    console.log("Number of Even: " + NumberEven);
    console.log("Number of Odd: " + NumberOdd);
    console.log("Number of Null: " + NumberNull);

}

module.exports = KindsArrayNumbers;
