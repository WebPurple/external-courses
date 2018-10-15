function Object () {
    var obj1 = {a: 5, b: "hello"};
var obj2 = obj1;
for (var key in obj2){
   console.log(key + ":" + obj2[key]);
   }
}
Object ()
