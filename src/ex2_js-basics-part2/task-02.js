//ex2_task-02_Isaev_Arsenyi

var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function OutArray(a) {
    var s = 0;
    for (let i = 0; i < a.length; ++i) {
        console.log(a[i]);
        ++s;
    }
    console.log('Число элементов: ' + s);
}
OutArray(arr1);

module.exports = OutArray;