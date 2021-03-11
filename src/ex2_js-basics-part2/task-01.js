function getTypeData(numOrStr) {
    const isNamber = typeof numOrStr === 'number';
    const isString = typeof numOrStr === 'string';
    const isNotNaN= !isNaN(numOrStr);

    if (isNamber && isNotNaN)  {
        return 'number'
    } 
    
    if (isString) {
        return 'string';
    }

    return 'undefined';
}

module.exports = getTypeData;
