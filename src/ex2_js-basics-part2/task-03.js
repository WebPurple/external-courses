function oddEvenZeroArray(arr) {
    let count=0, zeroElements=0, oddElements=0, evenElements=0;
    while (count<arr.length){
        if (typeof(arr[count])==="number"){
            if (arr[count]===0) {
                zeroElements++;
                oddElements--;
            }
            if (arr[count]%2===0) oddElements++
            else evenElements++;
        }
        count++;
    }
    let result=[oddElements, evenElements, zeroElements];
    return([result[0], result[1], result[2]]);
}
module.exports = oddEvenZeroArray;