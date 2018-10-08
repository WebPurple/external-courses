var f = function (arr) {
    var t = true;
    for (var i=1;  i < arr.length; i++) {
        if (t) {
            if (arr[i-1] !==  arr[i]) t = false;
        }
    }
console.log (t); 
}
f ([10,10])