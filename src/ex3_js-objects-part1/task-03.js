function checkStrInObj(str, obj){
    for (let key in obj){
        if (str===key){
            return true
        }
    }
    return false
}
module.exports = checkStrInObj;