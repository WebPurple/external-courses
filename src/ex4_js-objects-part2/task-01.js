const protoObject = {
    a: 'first',
    b: 'second'
};
const currentObj = Object.create(protoObject);
currentObj.c = 'third';
currentObj.e = 'fourth';

function returnPropFromProt(property, obj){
        if(!obj.hasOwnProperty(property)){
            return obj[property];
        }
    return undefined;
}
module.exports = returnPropFromProt;
