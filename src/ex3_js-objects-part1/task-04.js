function addStrIfNotExist(str, obj){
    isExist = true
    for (let key in obj){
        if (str!==key){
            isExist = false;
        }
    }
    if (!isExist) obj[str] = "new"//eslint-disable-line no-param-reassign
    return obj;
}
module.exports = addStrIfNotExist