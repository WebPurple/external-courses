module.exports = function countArray (myArr) {
    for (let i = myArr.length - 1; i >= 0; i--) {
    if (typeof myArr[i] !== "number") {
        myArr.splice(i, 1);
    }
    }
    let numberZero = 0;
    let numberEven = 0;
    let numberOdd = 0;
    for (let j = 0 ; j < myArr.length; j++) {
    if (myArr[j] === 0) {
        numberZero++;
        }
        else if (myArr[j] %2 === 0 || false) {
            numberEven++; 
        }
        else if (myArr[j] %2 === 1) {
            numberOdd++;
        }
    }
    console.log ([numberEven,numberOdd,numberZero]);
    console.log ('// четных: ' + numberEven + '; нечетных: ' + numberOdd + '; нуль: ' + numberZero);
    return ([numberEven,numberOdd,numberZero]);
}
