function addMissingProperty(property, obj){
    const result = obj;
    if(!obj.hasOwnProperty(property)){
        result[property] = 'new';
    }
    return result;
}

module.exports = addMissingProperty;