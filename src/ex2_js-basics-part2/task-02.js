var a = [1,2,3];
var i;
var f = function (a){
  for ( i = 0; i < a.length; i++){
    console.log(a[i]);
  }
  console.log(a.length);
}
f(a);
