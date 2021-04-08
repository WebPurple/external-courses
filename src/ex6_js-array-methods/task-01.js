function getSliceArr(array, begin, end) {
    const sliceArr = [];

    if (arguments.length === 3) {
        if (end > 0) {
            return sliceArr.concat(array.splice(begin, end-begin));
        }
        
        if (end < 0) {
            array.reverse();

            for (let i = 0; i < array.length; i++) {
                if (i < Math.abs(begin) && i >= Math.abs(end)) {
                    sliceArr.push(i);
                }
            }

            return sliceArr.reverse();
        }
    }

    if (arguments.length === 2) {
        return sliceArr.concat(array.splice(begin, array.length));
    }

    if (arguments.length === 1) {
        return  sliceArr.concat(array);
    }
}

module.exports = getSliceArr;
