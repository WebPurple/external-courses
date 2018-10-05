function myFunc(arr) {
    var sameCount = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[0] === arr[i]) {sameCount++;} 
    }
    if (sameCount === arr.length) {console.log('true');}
    else {console.log('false')};
}

myFunc([1,2,34,5]);
myFunc([1,1,1,1,1])