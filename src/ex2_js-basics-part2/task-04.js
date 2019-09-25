function checkSameArrays(argument) {
    let count =1;
    let isSame=true;
    while ((count <=argument.length)&&(isSame===true)) {
        if (argument[0]!==argument[count]) {
            isSame=false;
        }
        count++;
    }
    if (isSame) {
        return(console.log("Arrays are same"))
    }
    else {// eslint-disable-line no-else-return
        return(console.log("Arrays are different"))
    }
}
module.exports = checkSameArrays;