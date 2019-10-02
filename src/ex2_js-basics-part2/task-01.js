function definerType(any){
    if (typeof(any) === 'number') {
        return 'number';
    }
    else if (typeof(any) === 'string'){
        return 'string'
    }

    return undefined
}

module.exports = definerType;