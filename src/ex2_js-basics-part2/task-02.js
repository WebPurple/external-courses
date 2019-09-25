function displayArray(argument) {
    let count=0;
    let numberOfElements=1;
    while (count <argument.length){
        console.log(argument[count]);
        numberOfElements++;
        count++;
    }
    return console.log("Number of elements", numberOfElements-1);
}
module.exports = displayArray;