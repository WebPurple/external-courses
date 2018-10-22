//ex2_task-04_Isaev_Arsenyi

var arr1 = [5, 5, 5, 5, 5];
var arr2 = [5, 5, 5, 4];

function IsEql(a) {
    var sum = 0;
    for (let i = 0; i < a.length; ++i) {
        if (a[i] === a[0]) { ++sum; }
    }
    if (sum >= a.length) return true; return false;

}

console.log(IsEql(arr1));
console.log(IsEql(arr2));

module.exports = IsEql;