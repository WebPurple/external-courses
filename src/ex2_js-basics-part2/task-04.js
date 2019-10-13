function checkSameArrays(arr) {
    let count =1, isSame=true;
    while ((count <arr.length)&&(isSame===true)) {
        if (arr[0]!==arr[count]) {
            isSame=false;
        }
        count++;
    }
    return isSame;
}
module.exports = checkSameArrays;