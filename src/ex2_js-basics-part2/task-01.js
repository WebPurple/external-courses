let f = function( x ) {
    if (typeof x === 'string') {
        return 'string';
    }
    if (typeof x === 'number') {
        if (Number.isNaN(x)) {
            return undefined;
        } 
        return 'number';
    }
    //not a number and string
    return undefined;   
}


module.exports = f;