function mapSimilarity(array, callback) {
    let mapArray = [];
    array.forEach((element, index, array) => {
        mapArray.push(callback(element, index, array));
    });
    return mapArray
}

module.exports = mapSimilarity;