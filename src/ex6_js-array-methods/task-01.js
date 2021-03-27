function getSliceArr(array, begin, end) {
    const sliceArr = [];

    if (arguments.length === 3) {
        for (let elem of array) {
            if (array.indexOf(elem) >= begin && array.indexOf(elem) < end) {
                sliceArr.push(elem);
            }
        }

        return sliceArr;
    }

    if (arguments.length === 2) {
        for (let elem of array) {
            if (array.indexOf(elem) >= begin) {
                sliceArr.push(elem);
            }
        }

        return sliceArr;
    }

    if (arguments.length === 1) {
        for (let elem of array) {
            sliceArr.push(elem);
        }

        return sliceArr;
    }
}

module.exports = getSliceArr;
