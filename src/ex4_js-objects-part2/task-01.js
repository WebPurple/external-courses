function findPropInProto (prop, obj){//eslint-disable-line consistent-return
    for (let key in Object.getPrototypeOf(obj)) {
        if (prop===key){
            return obj[prop]
        }
    }
}
module.exports = findPropInProto;