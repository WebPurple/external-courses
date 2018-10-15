var obj = {
    a:10,
    b:"String"
};
var clone = {};
var f = function ( obj ){
    for ( var key in obj ){
        clone [key] = obj [key];
    }
    return clone;
}
f(obj);