function checkType(variable) {
    if(!isNaN(variable)){
        if (typeof(variable) === 'string') {
            return 'string';
        }
        if (typeof(variable) === 'number') {
            return 'number';
        }
    }
    return undefined;
}

module.exports = checkType;