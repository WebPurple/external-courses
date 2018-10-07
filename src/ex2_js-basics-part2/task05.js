var maxNum = [5, 0, 40, 360, 18];
for (var i = 0; i < maxNum.length; i++) {
    if(maxNum[i] > maxNum[0]){
        maxNum[0] = maxNum[i];
    }
}
console.log (maxNum[0]);