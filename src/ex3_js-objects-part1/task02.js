/*function Object () {
     var obj = {a: 5, b: "hello"};
for (var key in obj){
    console.log(key + ":" + obj[key]);
    }
}
Object ()*/
var f1 = function(obj) { 
    console.log("Keys:"); 
    for (var key in obj){ 
    console.log(key); 
    } 
    console.log("Props:"); 
    for (var key in obj){ 
    console.log(obj[key]); 
    } 
    } 
    
    var obj2 = { 
    a:1337, 
    b:322 
    } 
    
    f1(obj2);