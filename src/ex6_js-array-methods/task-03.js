const analogueEvery = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            return false;
        }
    }

    return true;
};

module.exports = analogueEvery;
