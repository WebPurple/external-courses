const checkType = (variableChecked) => {

    if (isNaN(variableChecked)) {
        console.log('undefined');
        return;
    }

    let Type = typeof(variableChecked);

    if (Type === 'number') {
        console.log('number')
        return;
    }

    if (Type === 'string') {
        console.log('string');
        return;
    }
    
    console.log('undefined');
    return;
};

let variableChecked = Boolean;

module.exports = checkType(variableChecked);