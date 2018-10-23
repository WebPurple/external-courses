"use strict"; 

function myFunction(string) {
    return string.replace(/^\s+|\s+$/gm,'');
}

module.exports = myFunction;