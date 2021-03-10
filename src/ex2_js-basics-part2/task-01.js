function getTypeData(numOrStr) {

    const checkForNamber = typeof(numOrStr) === 'number';

    const checkForString = typeof(numOrStr) === 'string';

    const checkForNaN= !isNaN(numOrStr);

    if (checkForNamber && checkForNaN)  {
        return 'number'
    } 
    
    if (checkForString === 'string') {
        return 'string';
    }

    return 'undefined';
}

module.exports = getTypeData;
