const checkType = (variableChecked) => {
    let returnType = undefined
    if (isNaN(variableChecked)) {
        return returnType;
    }

    const type = typeof(variableChecked);

    if (type === 'number') {
        returnType = "number";
        return returnType;
    }

    if (type === 'string') {
        returnType = "string";
        return returnType;
    }

    return returnType;
};

module.exports = checkType;
