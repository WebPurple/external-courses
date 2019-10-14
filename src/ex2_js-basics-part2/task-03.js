function getArrayElements(arr) {
    let count = evenElement = oddElement = zeroElement = 0;
    const endValue=[oddElement, evenElement, zeroElement];
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
    return [oddElement, evenElement, zeroElement];
}
module.exports = getArrayElements;