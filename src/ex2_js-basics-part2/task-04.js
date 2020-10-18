
const arrEqual = function (arr) {
    
    const firstEl = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (firstEl !== arr[i]) return false;
    }

    return true;
};
module.exports = arrEqual;
