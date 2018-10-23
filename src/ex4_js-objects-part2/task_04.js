"use strict"; 

function myFunction(string){
    return string.charAt(0).toUpperCase() + string.substr(1).toLowerCase();
}

module.exports = myFunction;