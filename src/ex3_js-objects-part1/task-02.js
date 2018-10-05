
function dumpObject(someObject){
    var key;
    var allKeys = Object.keys(someObject);
    allKeys.foreach(function(key){
        console.log(key);
    });
}

var myobj = {
    a: 1,
    b: 123123,
    asdasd: true
}

dumpObject(myobj);