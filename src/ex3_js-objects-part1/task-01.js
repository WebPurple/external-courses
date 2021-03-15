const workWithObject = () => {
    let testObject = {};

    testObject[isString] = "object";
    testObject[isBool] = true;
    testObject[isNumber] = 2;
    testObject[isNull] = null;
    
    delete testObject[isString];

    return;
}

module.exports = workWithObject;