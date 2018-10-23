"use strict"; 

function myFunction(string, value){
    var str = string;
    var resultStr = '';    
    var i = null;

    if(str.length > value) {
        for(i = 0; i < str.length - value; i++){
            resultStr += str[i];
        }
        resultStr += '…';
    }

    return resultStr;
}

module.exports = myFunction;


