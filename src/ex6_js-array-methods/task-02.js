const analogueSome = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        if (func.call(arr, arr[i], i, arr)) {
            return true;
        }
    }

    return false;
};

module.exports = analogueSome;
