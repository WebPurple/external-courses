function getArrayElements(arr) {
    let count = evenElement = oddElement = zeroElement = 0;
    while (count<arr.length){
        if (typeof(arr[count])==="number"){
            if (arr[count]===0) {
                zeroElement++;
                oddElement--;
            }
            if (arr[count]%2===0) oddElement++
            else evenElement++;
        }
        count++;
    }
    let endValue=[oddElement, evenElement, zeroElement];
    return([endValue[0], endValue[1], endValue[2]]);
}
module.exports = getArrayElements;