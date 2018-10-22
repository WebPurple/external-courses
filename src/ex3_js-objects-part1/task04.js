var f4 = function (keyName, obj) {
    var k = false;
    for (var key in obj) {
        if (key === keyName) {
            k = true;
        }
    }
        if (!k) {
            obj.keyName = "new";
        }
    }
 var obj4 = { a: 5}
 console.log ("before adding...");
 for (var key in obj4) {
     console.log (obj4[key]);
 }
 f4 ("b", obj4);
 console.log ("after adding...");
 for (var key in obj4) {
     console.log (obj4[key]);
 }