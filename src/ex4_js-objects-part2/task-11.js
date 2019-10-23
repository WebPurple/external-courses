'use strict';
function amountEachSymbolInString(string) {
    let array = string.split('');
    for( let i = 0; i < array.length; i++) {
        let count = 0;
        for( let x = 0; x < array.length; x++ ) {
            if(array[i] === array[x] && count++ > 0) {
                array.splice(x, 1);
                count = 0;
                x = -1;
                console.log();
            }
        }
    }
    console.log(array.length);
    return array.length;
}
module.exports = amountEachSymbolInString;