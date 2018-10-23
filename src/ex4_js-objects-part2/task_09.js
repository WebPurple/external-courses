"use strict"; 

function myFunction(string, substring, value) {
    var str = string.split(' ');
    var resultString = '';
    var i = null;
    for (i in str) {
        resultString += str[i] + ' ';
        if(+i === +value) {
            resultString += substring + ' ';
        }
    }
    return resultString    
}

module.exports = myFunction;