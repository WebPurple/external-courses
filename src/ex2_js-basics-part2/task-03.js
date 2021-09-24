'use strict'

function KindsArrayNumbers (NeedfullArray) {
    let NumberArray = [0, 0, 0];
    for (let i = 0; i < NeedfullArray.length; i++) {
        if (typeof NeedfullArray[i] === 'number') {
            if ((NeedfullArray[i] % 2 === 0) && (NeedfullArray[i] !== 0)) {
                NumberArray[0]++;
            } else if (NeedfullArray[i] % 2 !== 0) {
                NumberArray[1]++;
            } else if (NeedfullArray[i] === 0) {
                NumberArray[2]++;
            }
        }
    }
    console.log("Number of Even: " + NumberArray[0]);
    console.log("Number of Odd: " + NumberArray[1]);
    console.log("Number of Null: " + NumberArray[2]);
    console.log(NumberArray);
}

module.exports = KindsArrayNumbers;
