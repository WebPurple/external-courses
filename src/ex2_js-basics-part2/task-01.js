"use strict"

function whichType(inputParam) {

    let type = typeof(inputParam);

    if ( type === "string" ){
        return "string";
    }

    if ( type === "number" ){
        if ( isNaN( inputParam ) ){
            return "undefined";
        }

        return "number";
    }

    return undefined;
}

module.exports = whichType;