function addStrIfNotExist(str, obj){
    for (let key in obj){
        if (str!==key){
            obj.str = "new";//eslint-disable-line no-param-reassign
        }
    }
    return obj;
}
module.exports = addStrIfNotExist;