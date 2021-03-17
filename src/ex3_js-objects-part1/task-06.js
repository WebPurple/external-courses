function getDeepClone(clonedObj) {
    let clone;

    if (null === clonedObj || clonedObj !== "object") {
        return Object.assign({}, clonedObj);
    }

    if (Array.isArray(clonedObj)) {
        clone = [];

        clonedObj.forEach(elem => {
            clone.push(getDeepClone(elem));
        });
        
        return clone;
    }

    for (let elem in clonedObj) {

        if (clonedObj.hasOwnProperty(elem)) {
            clone = {};

            clone[elem] = getDeepClone(elem);
        }   
        
        return clone;    
    } 
}

module.exports = getDeepClone;
