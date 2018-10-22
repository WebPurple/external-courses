var f3 = function (keyName, obj) {
    var k = false;
    for (var key in obj) {
        if (key === keyName) {
            k = true;
        }
    }
    console.log (k);
}
var key1 = "a";
var key2 = "b";
var obj3 = { a: 123}

f3 (key1, obj3);
f3 (key2, obj3);