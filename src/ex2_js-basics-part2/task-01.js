//ex2_task-01_Isaev_Arsenyi

var a1 = 5;
var a2 = "5";

function Out(a) {
    if (typeof (a) === 'string') {
        console.log("'" + a + "'" + " - это строка");
        return (typeof (a));
    } else if (typeof (a) === 'number') {
        console.log(a + " - это число");
        return (typeof (a));
    }
    return undefined;
}


Out(a1);
Out(a2);

module.exports = Out;