function filterSimilarity(array, callback) {
    let filtredArray = [];
    array.forEach((element, index, array) => {
        if (callback(element, index, array)) {
            filtredArray.push(element);
        }
    });
    return filtredArray
}

module.exports = filterSimilarity;