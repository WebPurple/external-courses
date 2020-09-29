function getChange(n) {
    if (isNaN(n)) {
        return undefined;
    }
    
    if (typeof n === 'string') {
        return 'string';
    } else if (typeof n === 'number') {
        return 'number';
    }

        return undefined;
};
module.exports = getChange;
