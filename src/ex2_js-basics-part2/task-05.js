//ex2_task-05_Isaev_Arsenyi

arr1 = [1, -2, 100, 0, 0.1];

function Max(a) {
    var max = a[0];
    for (let i = 0; i < a.length; ++i) {
        if (a[i] > max) max = a[i];
    }
    console.log("Максимальное значение в массиве: " + max);
    return max;
}

Max(arr1);

module.exports = Max;