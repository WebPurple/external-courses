function dataType(Value) {
    if (typeof Value == 'string') {
        Value = 'string';
    } else if (isNaN(Value)) {
        Value = 'undefined';
    } else if (typeof Value == 'number') {
        Value = 'number';
    } else {
        Value = 'undefined';
    }
    return Value;
}
module.exports = checkingIdenticalElements;