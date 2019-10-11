function sliceSimilarity(array, begin = 0, end = array.length) {
    let currentArary = [], startCycle, endCycle;
    if (Math.abs(begin) < array.length && Math.abs(begin) <= array.length) {
        if (begin >= 0 && end > 0) {
            startCycle = begin;
            endCycle = end;
        }
        if (begin < 0 && end < 0) {
            startCycle = array.length + begin;
            endCycle = array.length + end;
        }
        if (begin < 0 && end > 0) {
            startCycle = array.length + begin;
            endCycle = end;
        }
        if (begin > 0 && end < 0) {
            startCycle = begin;
            endCycle = array.length + end;
        }
        for (let i = startCycle; i < endCycle; i++) {
            currentArary.push(array[i]);
        }
    }
    return currentArary;
}
module.exports = sliceSimilarity;