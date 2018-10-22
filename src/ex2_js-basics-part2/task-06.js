//ex2_task-06_Isaev_Arsenyi

var a1 = 71;

function Smpl(a) {
    var sum = 0;   
     if ((a >= 2) && (typeof (a) === 'number') && (a !== NaN) && (a <= 1000)) {
        for (let i = 2; i < a; ++i) {
            if (a % i === 0)++sum;
        }
        if (sum <= 1) return "Число " + a + " - простое число";
        else if (sum > 1) return "Число " + a + " - составное число";
    }
    else return "Данные неверны";
}


Smpl(a1);

module.exports = Smpl;