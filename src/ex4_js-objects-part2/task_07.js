"use strict"; 

function myFunction(string, value){
    var str = string;
    var resultStr = '';    

    if(str.length > value) {
        var i = null;
        for(i = 0; i < str.length - value; i++){
            resultStr += str[i];
        }
        resultStr += '…';
    }

    return  resultStr;
}

module.exports = myFunction;


