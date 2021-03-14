function getDeepClone(clonedObj) {
    let clone;

    if (null === clonedObj || typeof clonedObj !== "object") {
        return clonedObj;
    }

    if (Array.isArray(clonedObj)) {
        clone = [];

        for (let i = 0; i < clonedObj.length; i++) {
            clone[i] = getDeepClone(clonedObj[i]);
        }

        return clone;
    }

    if (typeof clonedObj === "object") {
        clone = {};

        for (let elem in clonedObj) {
            if (clonedObj.hasOwnProperty(elem)) {
                clone[elem] = getDeepClone(clonedObj[elem]);
            } 
        }

        return clone;
    }
}

module.exports = getDeepClone;
