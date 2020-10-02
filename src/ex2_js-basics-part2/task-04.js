function sameArray(arr) {
    let num = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (num !== arr[i]) {
            return false;
        }
    } 
    
    return true;
};

module.exports = sameArray;
