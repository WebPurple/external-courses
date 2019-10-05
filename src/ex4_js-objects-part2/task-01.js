function findPropInProto (prop, obj){//eslint-disable-line consistent-return
    //const obj = Object.create({});
    for (let key in Object.getPrototypeOf(obj)) {
        if (prop===key){
            return obj[prop]
        }
    }
}
module.exports = findPropInProto;