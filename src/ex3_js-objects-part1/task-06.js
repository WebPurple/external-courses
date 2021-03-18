function getDeepClone(clonedObj) {
    let clone;

    if (null === clonedObj || typeof clonedObj !== 'object') {
        return clonedObj;
    }

    if (Array.isArray(clonedObj)) {
        clone = [];

        clonedObj.forEach(elem => {
            clone.push(getDeepClone(elem));
        });
        
        return clone;
    }

    clone = {};

    for (let elem in clonedObj) {
        if (clonedObj.hasOwnProperty(elem)) {
            clone[elem] = getDeepClone(clonedObj[elem]);
        } 
    }

    return clone;
}

module.exports = getDeepClone;
