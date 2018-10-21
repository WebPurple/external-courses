"use strict"; 

function cloneObject(object) {

    var clone = {};
    var property = null; 

        for (property in object) { 
            if (object.hasOwnProperty(property)) { 
                if ("object"===typeof object[property]) 
                    clone[property] = makeClone(object[property]); 
                else
                    clone[property] = object[property]; 
            }
        }

    return clone;
}

module.exports = cloneObject;