function getArrayElements(Arr) {
    let count = evenElement = oddElement = zeroElement = 0;
    while (count<Arr.length){
        if (typeof(Arr[count])==="number"){
            if (Arr[count]===0) {
                zeroElement++;
                oddElement--;
            }
            if (Arr[count]%2===0) oddElement++
            else evenElement++;
        }
        count++;
    }
    let endValue=[oddElement, evenElement, zeroElement];
    return([endValue[0], endValue[1], endValue[2]]);
}
module.exports = getArrayElements;