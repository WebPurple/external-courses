function getSliceArr(array, begin, end) {
    const sliceArr = [];

    if (arguments.length === 3) {
        for (let elem of array) {
            const index = array.indexOf(elem);

            if (index>= begin && index < end) {
                sliceArr.push(elem);
            }  
        }

        if (end < 0) {
            array.reverse();

            for (let elem of array) {
                const index = array.indexOf(elem);

                if (index < Math.abs(begin) && index >= Math.abs(end)) {
                    sliceArr.push(elem);
                }
            }

            sliceArr.reverse();
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
