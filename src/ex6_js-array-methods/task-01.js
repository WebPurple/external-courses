function getSliceArr(array, begin, end) {
    const sliceArr = [];

    if (arguments.length === 3) {
        if (end > 0) {
           return sliceArr.concat(array.splice(begin, end-begin));
        }
        
        if (end < 0) {
            array.reverse();

            for (let elem of array) {
                const index = array.indexOf(elem);

                if (index < Math.abs(begin) && index >= Math.abs(end)) {
                    sliceArr.push(elem);
                }
            }

            return sliceArr.reverse();
        }   
    }

    if (arguments.length === 2) {
        return sliceArr.concat(array.splice(begin, array.length));
    }

    if (arguments.length === 1) {
        return  sliceArr.concat(array)
    }
}

module.exports = getSliceArr;
