//ex2_task-03_Isaev_Arsenyi

arr1 = [1, 2, 3, 4, 5, '6', 7, 0, 8, 9, 0];
arr2 = [1, 2, 3, 4, null, NaN, 7, 8, 9];

function Even(a) {
    var ev = 0, od = 0, zero = 0;
    for (let i = 0; i < a.length; ++i) {
        if (typeof (a[i]) === 'number' && (a[i] !== NaN)) {
            if (a[i] === 0) { ++zero; }
            else if (a[i] % 2 === 0) { ev++; }
            else { od++; }
        }

    }
    if (zero === 0) console.log("четных: " + ev + "; нечетных: " + od);
    else console.log("четных: " + ev + "; нечетных: " + od + "; нолей: " + zero);
    return [ev, od, zero];
}

Even(arr1);
Even(arr2);

module.exports = Even;