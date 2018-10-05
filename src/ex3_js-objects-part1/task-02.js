
function dumpObject(someObject){
    var objectKey;
    var allKeys = Object.keys(someObject);
    console.log(allKeys);
    for(objectKey in allKeys){
        console.log(objectKey);
    }
}

var myobj = {
    a: 1,
    b: 123123,
    asdasd: true
}
console.log(myobj);
dumpObject(myobj);