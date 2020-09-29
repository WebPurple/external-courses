function sameArray(arr) {
    let arr1 = arr.every(function (item, i, list) {
        if (item === list[0]) {
            return true;
        } 

            return false
    });

    return arr1; 
};
module.exports = sameArray;
