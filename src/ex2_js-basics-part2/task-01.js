const checkType = (variableChecked) => {

    if (isNaN(variableChecked)) {
        console.log('undefined');
        return;
    }

    let type = typeof(variableChecked);

    if (type === 'number') {
        console.log('number')
        return;
    }

    if (type === 'string') {
        console.log('string');
        return;
    }
    
    console.log('undefined');
    return;
};

let variableChecked = Boolean;

module.exports = checkType(variableChecked);