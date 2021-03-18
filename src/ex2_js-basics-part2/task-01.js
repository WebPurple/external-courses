const checkType = (variableChecked) => {
    if (isNaN(variableChecked)) {
        return undefined; 
    }

    const type = typeof(variableChecked);

    if (type === 'number') {
        return "number";
    }
 
    if (type === 'string') {
        return "string";
    }
    return undefined;
};

module.exports = checkType;
