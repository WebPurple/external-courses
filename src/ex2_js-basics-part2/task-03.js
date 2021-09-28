//task-03
let f = function(array){
    let arr = [0, 1, 2, 3, 4, 5, 6, 7];
    let countEven = 0;
    let countOdd = 0;
    let countZero = 0;
    for (i = 0; i < arr.length; i++) {
        if ((arr[i] % 2 == 0) && (arr[i] != 0)) {
            countEven++;
        }
        else if (arr[i] % 2 == 1) {
            countOdd++;
        }
        else if (arr[i] == 0) {
            countZero++;
        }
    }    
    console.log(countEven, countOdd, countZero);
}    
f();
Module.exports = f;