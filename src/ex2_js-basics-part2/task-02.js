function displayArray(arr) {
    let count=0, numberOfElements=1;
    while (count <arr.length){
        console.log(arr[count]);
        count++;
    }
    return console.log("Number of elements", arr.length);
}
module.exports = displayArray;