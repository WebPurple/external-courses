function createObjWithoutProto(){
    const obj = Object.create(null);
    return obj;
}
module.exports = createObjWithoutProto;