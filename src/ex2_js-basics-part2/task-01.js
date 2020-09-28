module.exports = function numberOrString(myMessage){
    if ( typeof myMessage === "string" ){
        return 'string';
    } else if (typeof myMessage === "number" && !isNaN(myMessage)) {
        return 'number';
    }
        return undefined;
}
