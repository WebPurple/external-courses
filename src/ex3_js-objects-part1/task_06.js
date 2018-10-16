var original = {
    Name: 'Elena',
    Age: 21,
    a: {
        s: 10,
        v: 15
    },
    b: [1, 2, 3, 4],
    c: [1, [5, 6, 7], 2, 3]

}

function cloneOdj(obj1) {
    var obj2 = {};
    for (var key in obj1) {
        if (Array.isArray(obj1[key])) {
            var arr = obj1[key]
            obj2[key] = arr.slice();
        } else {
            if (typeof obj1[key] == 'object') {
                cloneOdj(obj2[key]);
            } else {
                obj2[key] = obj1[key];
            }

        }
    }
    return obj2
}










console.log(cloneOdj(original));