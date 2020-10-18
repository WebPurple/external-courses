
function valOf(value) {

    if (isNaN(value)) {
        return undefined;
    }
    const typeValue = typeof (value);
    
    if ( typeValue === 'string') {
        return typeValue;
    } 
    if (typeValue === 'number') {
        return typeValue;
    }

    return undefined;
}

module.exports = valOf;
