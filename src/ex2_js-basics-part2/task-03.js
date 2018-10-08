var i;
var p = 0;
var y = 0;
var x = 0;
var z = [1,2,3];
var f = function(z){
  for ( i = 0; i < z.length; i++){
   if ( z [i] % 2 === 0, z[i] === 0 ){ 
    y++;
   }
   else if ( z[i] % 2 !== 0 ){
    x++;
   }
   else if ( z[i] % 2 === 0 ){
    p++;
   }
}
console.log("Even: " + p);
console.log("Odd: " + x );
if ( y !== 0){
console.log("Zeroes: " + y);
}
else {
}
}
f([1,1,1]);