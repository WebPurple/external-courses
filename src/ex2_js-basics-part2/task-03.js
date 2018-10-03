'use strict';

function countNumbersByParity(numberArray){
    
    var result = [0 ,0 ,0];
    
    numberArray.forEach(element => {
        if (element != null){
            if (element === 0){
                result[2]++;
            } else {
                result[element % 2]++;
            }
        }
    });

    return result;
}

module.exports = countNumbersByParity;
