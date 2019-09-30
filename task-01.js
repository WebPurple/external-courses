function inputData(Value) {
    if (typeof Value === 'number' && !isNaN(Value)) {
        return 'Number';
    } else if (typeof Value === 'string')
      	{
        return 'String';
    }
    return undefined;
}
module.exports = inputData;