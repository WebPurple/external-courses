module.exports = copyObject;

function copyObject(object){
    let copy = {};

    for(let prop in object){
        if(object.hasOwnProperty(prop)){
            copy[prop] = object[prop];
        }
    }
    return copy;
}