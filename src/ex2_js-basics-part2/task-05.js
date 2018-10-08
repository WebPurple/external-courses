var arr = [1,25,3];
var a = arr.length;
var f = function (arr){
  var x = arr[0];
for ( var i = 0; i < a; i++){
  if ( x < arr[i] ){
    x = arr[i];
  }
}
console.log(x);
}
f([1,25,3]);