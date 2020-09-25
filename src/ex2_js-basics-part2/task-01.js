function typeChecking(elem){
    let typeData = typeof elem;
    if (typeData === 'number'){
        if (isNaN(elem)){
            return undefined;
        } 
        return "number";
    } else if (typeData === 'string'){
        return "string";
    } 
    return undefined;
}

module.exports = typeChecking