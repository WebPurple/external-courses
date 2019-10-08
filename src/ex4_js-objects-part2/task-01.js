const protoObject = {
    a: 'first',
    b: 'second'
};
const currentObj = Object.create(protoObject);
currentObj.c = 'third';
currentObj.e = 'fourth';

function returnPropFromProt(property, obj){
    for(let key in obj){
        if(!obj.hasOwnProperty(property)&& key===property){
            return obj[key];
        }
    }
    return undefined;
}
module.exports = returnPropFromProt;
