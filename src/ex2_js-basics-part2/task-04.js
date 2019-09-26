function checkSameArrays(argument) {
    let count =1;
    let isSame=true;
    while ((count <argument.length)&&(isSame===true)) {
        if (argument[0]!==argument[count]) {
            isSame=false;
        }
        count++;
    }
    return(isSame)
}
module.exports = checkSameArrays;