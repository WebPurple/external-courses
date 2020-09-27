"use strict"

function whichType(inputParam)  {

    const typeOfInputParam = isNaN(inputParam) ? undefined : typeof(inputParam)

    if ( typeOfInputParam == "number" )
        return "number";

    if ( typeOfInputParam == "string" )
        return "string";

    return "undefined"
}