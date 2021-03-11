function getTypeData(numOrStr) {
    const isNamber = typeof numOrStr === 'number';
    const isString = typeof numOrStr === 'string';
    const isNaN= !isNaN(numOrStr);

    if (isNamber && isNaN)  {
        return 'number'
    } 
    
    if (isString === 'string') {
        return 'string';
    }

    return 'undefined';
}

module.exports = getTypeData;
