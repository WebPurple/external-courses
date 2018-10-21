"use strict"; 

function objectProcessing(object, string){
    if (!(string in object)) {
        object[string] = 'new';
    }   else {
        console.log('Свойство с именем ' + string + ' существует.');
    }   
    return object;
}

module.exports = objectProcessing;