function dClone(obj){
    let newObj = {};
    if (typeof obj === "object"){
        for (let key in obj){
            let prop = obj[key];
            let type = typeof prop;
            switch (type) {
                case "object":
                    if (Array.isArray(prop)) {
                        newObj[key] = [];
                        for (let item of prop){
                            newObj[key].push(dClone(item))
                        }
                    }
                    else{
                        newObj[key] = dClone(prop);
                    }
                    break;
                default:
                    newObj[key] = prop;
                    break;
            }
        }
        return newObj
    }
    else {//eslint-disable-line no-else-return
        return obj;
    }
}
module.exports = dClone;