"use strict"; 

function myFunction(string){   
    var str = string.split(' ');
    var resultString = '';
    var i = null;

    for(i = 0; i < str.length; i++){
        resultString += str[i].charAt(0).toUpperCase() + str[i].substr(1) + ' ';
    }

    return resultString;
}

module.exports = myFunction;

