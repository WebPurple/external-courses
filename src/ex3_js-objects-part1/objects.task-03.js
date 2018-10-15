var obj = {
    a:10,
    b:'LOL',
    c:undefined
};
var p = 1;
var str = 'a';
var f = function ( obj ){
    for ( var key in obj ){
        if ( key === str ){
            p++;

        }
    }
    if ( p === 1 ){
        console.log("No coincidense");
    }
    else {
        console.log("There is a match");
    }


}
f(obj);