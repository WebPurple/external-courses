const analogueMap = (arr, func) => {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(func(arr[i], i, arr));
    }

    return result;
};

module.exports = analogueMap;
