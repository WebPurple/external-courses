var f = function (arr) {
    var t = true;
    for (var i=i;  i < arr.length; i++) {
        if (t) {
            if (arr[i-1] !==  arr[i]) t = false;
        }
    }
console.log (t); 
}
f ([10,15,6,6,8,6])