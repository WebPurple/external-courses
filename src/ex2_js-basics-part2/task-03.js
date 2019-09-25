function oddEvenZeroArray(argument) {
    let count=0;
    let zeroElements=0;
    let oddElements=0;
    let evenElements=0;
    while (count<argument.length){
        if (typeof(argument[count])==="number"){
            if (argument[count]===0) {
                zeroElements++;
                oddElements--;
            }
            if (argument[count]%2===0) oddElements++
            else evenElements++;
        }
        count++;
    }
    let result=[oddElements, evenElements, zeroElements];
    return([result[0], result[1], result[2]]);
}
module.exports = oddEvenZeroArray;