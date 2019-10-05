module.exports = deepCopyObject;

function deepCopyObject(object){
    let clone;
    if(object.length){
        clone = [];
    } else{
        clone = {};
    }
    for (let prop in object) {
        if (typeof object[prop] === "object") {
                clone[prop] = deepCopyObject(object[prop]);
        } else {
            clone[prop] = object[prop];
        }
    }  
    return clone;
}
