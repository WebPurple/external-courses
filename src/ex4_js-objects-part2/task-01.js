function findPropInProto (prop, obj){
    for (let key in Object.getPrototypeOf(obj)) {
        if (prop===key){
            return obj[prop]
        }
    }
    return undefined
}
module.exports = findPropInProto;