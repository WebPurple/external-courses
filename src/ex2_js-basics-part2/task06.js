var f = function(x) {
    if (x > 1000) console.log('Неверные данные');
    else if (x === 0) console.log(x);
    else if (x === 2 || x === 3) console.log(`Число ${x} – простое число`);
    else if ((x % 2 === 0) || (x % 3 === 0)) console.log(`Число ${x} – составное число`);
    else console.log(`Число ${x} – простое число`);
}
