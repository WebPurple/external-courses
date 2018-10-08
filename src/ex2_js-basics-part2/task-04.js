var arr = [4,4,4];
var i;
var z = 0;
var f = function(arr){
for ( i = 0; i < arr.length; i++){
  if ( arr[i] === arr[i+1]){
      z++;
   }
  else{
   }
}
var b = arr.length - 1
if (z === b ){
 console.log("True"); 
}
else{
  console.log("False");
}
}
f([1,2,3]);
