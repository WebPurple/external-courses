var original = {
    Name: 'Elena',
    Age: 21,

}


function cloneOdj(obj1) {
    var obj2 = {};
    for (var key in obj1) {
        obj2[key] = obj1[key];
    }
    return obj2;
}

console.log(cloneOdj(original))