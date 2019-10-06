module.exports = trimStrToGivenLength;

function trimStrToGivenLength(str,num){
    let currentStr;
    if(str.length > num){
        currentStr = str.slice(0,num-1)+"…"
    }
    return currentStr;
}