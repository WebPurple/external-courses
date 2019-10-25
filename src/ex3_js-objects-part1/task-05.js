function copyObj(obj){
    const copy = Object.assign({},obj);
    return copy;
}
module.exports = copyObj;