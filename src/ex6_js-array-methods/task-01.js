const analogueSlice = (arr, begin, end) => {
    if (begin === undefined && end === undefined) {
        return arr;
    }

    if (begin > arr.length) { 
        return [];
    }

    const intermediateBegin = (begin < 0) ? arr.length + begin : begin;
    const intermediateEnd = (end === undefined) ? arr.length : (end < 0) ? arr.length + end : end;
    let result = [];

    for(let i = intermediateBegin; i < intermediateEnd; i++) {
        result.push(arr[i]);
    }

    return result;
};

module.exports = analogueSlice;
