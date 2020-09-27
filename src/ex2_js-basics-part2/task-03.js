module.exports = function countArray (oldArr) {
    let newArr = oldArr;
    for (let i2 = oldArr.length - 1; i2 >= 0; i2--) {
        if (typeof oldArr[i2] !== "number") {
            oldArr.splice(i2, 1);
        }
    }
    let i = 0;
    let j = 0;
    let j2 = 0;
    let j3 = 0;
    for (i = 0 ; i < newArr.length; i++) {
        if (newArr[i] === 0) {
            j++;
        }
        else if (newArr[i] %2 === 0 || false) {
            j2++; 
        }	
        else if (newArr[i] %2 === 1) {
            j3++;
        }	
}
return [j2,j3,j];
}
