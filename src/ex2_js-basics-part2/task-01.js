function getChange(n) {
    if (isNaN(n)) {
        return undefined;
    }
    
    const type = typeof n;

    if (type === 'string') {
        return type;
    } 
    
    if (type === 'number') {
        return type;
    }

    return undefined;
};

module.exports = getChange;
