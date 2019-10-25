function displayArray(arr) {
    for (let count=0;count<arr.length;count++){
        console.log(arr[count]);
    }
    return console.log("Number of elements", arr.length);
}
module.exports = displayArray;