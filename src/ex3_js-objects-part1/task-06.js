function getDeepClone(clonedObj) {
    let ObjClone; 

    if (Array.isArray(clonedObj)) {
        ObjClone = []; 
    } 
    
    if (!Array.isArray(clonedObj)) {
        ObjClone = {}; 
    }

    for (let key in clonedObj) {
        if (clonedObj.hasOwnProperty(key)) {
            const valueClonedObj = clonedObj[key];
            let valueObjClone = ObjClone[key];

            if (typeof valueClonedObj === "object") {
                valueObjClone = getDeepClone(valueClonedObj);
            }

            if (!(typeof valueClonedObj === "object")) {
                valueObjClone = valueClonedObj;
            }
        }
    }

    return ObjClone;
}

module.exports = getDeepClone;
