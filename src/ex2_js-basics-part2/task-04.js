function sameElement(arr){
    if (arr.length - [...new Set(arr)].length === 0){
         return false;
    }
    return true;
}

module.exports = sameElement