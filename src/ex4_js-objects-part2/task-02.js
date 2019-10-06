module.exports = createObjWithoutProto;

function createObjWithoutProto(){
    const obj = Object.create(null);
    return obj;
}