var f = function(q){
if ( typeof (q) == "string" ){
   console.log( "String" ); 
}
else if (typeof (q) == "number"){
    console.log( "Number" );
}
else {
    console.log( "Undefined" );
}
}
f(null);
f(1234);
f([1,2,3]);
f("Hello");