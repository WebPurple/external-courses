
const copyObj = function (obj) {
    
    const objCopy = {};

    for (key in obj) {
        objCopy[key] = obj[key];
    }
    
    return objCopy;
};
module.exports = copyObj;
