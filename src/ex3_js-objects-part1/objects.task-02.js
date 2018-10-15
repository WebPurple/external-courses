var obj = {
    a: 10,
    name: "Alex"
};
var f = function (obj){
    console.log("Keys:")
    for ( var key in obj ){
        console.log(key);
    }
    console.log("Values:")
    for ( var key in obj){
        console.log(obj[key]);
    }

}
f(obj);