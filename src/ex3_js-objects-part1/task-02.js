
function dumpObject(someObject){
    var key;
    var allKeys = Object.keys(someObject);
    allKeys.forEach(key => {
        console.log(key + ': ' + someObject[key]);
    });
}


module.exports = dumpObject;
