'use strict';

function copy(someObject){
    var objectCopy = someObject;
    return objectCopy ; // можно было бы return objectCopy = someObject 
}                       // или return someObject

module.exports = copy;
