const analogueReduce = (arr, func, initialValue) => {
    let previousValue = (initialValue === undefined) ? arr[0] : initialValue;
    const begin = (initialValue === undefined) ? 1 : 0;

    for (let i = begin; i < arr.length; i++) {
        previousValue = func(previousValue, arr[i], i, arr);
    }

    return previousValue;
};

module.exports = analogueReduce;